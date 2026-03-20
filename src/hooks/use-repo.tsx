import { useQueries } from '@tanstack/react-query'

const useRepo = () => {
    const token = process.env.GITHUB_TOKEN
    if (token) {
        console.log('Token Exists')
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
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/repos/${repo}`
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
