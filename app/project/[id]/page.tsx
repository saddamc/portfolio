import type { Metadata } from 'next';

interface PageParams {
  id: string;
}

interface PageProps {
  params: Promise<PageParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  return <div>Page ID: {resolvedParams.id}</div>;
}
