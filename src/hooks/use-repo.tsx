import { useQueries } from "@tanstack/react-query"

const useRepo = () => {
  const repos = ["ceejmangulabnan/multiplayer-study-room", "ceejmangulabnan/watchqueue", "ceejmangulabnan/genshin-farm"]

  const query = useQueries({
    queries: repos.map((repo) => ({
      queryKey: ["repo", repo],
      queryFn: async () => {
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        } else {
          return response.json()
        }
      }
    }))
  })

  return { repoData: query }
}

export default useRepo