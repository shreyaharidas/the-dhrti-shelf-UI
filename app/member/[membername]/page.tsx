import MemberClient from "./client";

interface MemberPageProps {
  params: Promise<{
    membername: string;
  }>;
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { membername } = await params;

  return <MemberClient membername={membername} />;
}