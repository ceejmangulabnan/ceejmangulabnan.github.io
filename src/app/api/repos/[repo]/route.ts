export async function GET(
    _request: Request,
    { params }: { params: Promise<{ repo: string }> }
) {
    const { repo } = await params
    const response = await fetch(
        `https://api.github.com/repos/ceejmangulabnan/${repo}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        }
    )
    if (!response.ok) {
        throw new Error('Network response was not ok')
    } else {
        const data = await response.json()
        return Response.json(data)
    }
}
