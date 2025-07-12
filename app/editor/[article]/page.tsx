import ArticleEditorPanel from "@/components/editor/ArticleEditorPanel";

// Slugified route which points to a particular article
export default async function ArticleEditorPage({ params }: { params: Promise<{ article: string }>}) {
    const articleSlug = (await params).article;

    return (
        <ArticleEditorPanel aID={articleSlug} />
    )
}