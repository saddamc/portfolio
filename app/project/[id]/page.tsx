

interface PageParams {
  id: string; // your dynamic param
}

interface PageProps {
  params: Promise<PageParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  return <div>Page ID: {resolvedParams.id}</div>;
}
