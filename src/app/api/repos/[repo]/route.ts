export const dynamic = 'force-dynamic'

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
        return Response.json(
            { error: 'Failed to fetch repository data' },
            { status: response.status }
        )
    } else {
        const data = await response.json()
        return Response.json(data)
    }
}
