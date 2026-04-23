import { useQueries } from '@tanstack/react-query'

const useRepo = () => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
    if (token) {
        console.log('Token Exists')
    } else {
        console.log('GitHub Token Not Found!')
    }

    const repos = [
        'multiplayer-study-room',
        'watchqueue',
        'genshin-farm',
        'genshin-farm-guide',
    ]

    // const repos = [
    //     'ceejmangulabnan/multiplayer-study-room',
    //     'ceejmangulabnan/watchqueue',
    //     'ceejmangulabnan/genshin-farm',
    //     'ceejmangulabnan/genshin-farm-guide',
    // ]

    const query = useQueries({
        queries: repos.map((repo) => ({
            queryKey: ['repo', repo],
            queryFn: async () => {
                const response = await fetch(
                    `https://api.github.com/repos/ceejmangulabnan/${repo}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                )
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                } else {
                    return response.json()
                }
            },
        })),
        combine: (results) => {
            return {
                data: results.map((query) => query.data),
                pending: results.some((query) => query.isPending),
            }
        },
    })

    return { repoData: query }
}

export default useRepo
