"use client";

import { useEffect, useState } from "react";

interface MemberClientProps {
  membername: string;
}

export default function MemberClient({ membername }: MemberClientProps) {
  const [memberData, setMemberData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/members/${membername}`);
        // const data = await response.json();
        // setMemberData(data);

        // Placeholder: just use the membername for now
        setMemberData({ name: membername });
      } catch (error) {
        console.error("Error fetching member data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberData();
  }, [membername]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-20 dark:bg-slate-950">
      <div className="rounded-3xl border border-slate-200 bg-white px-10 py-14 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/20">
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
          Hello, {memberData?.name}.

          Welcome to your dashboard! 
          This is where you can manage your profile, view your activity, and access exclusive content. 
          Explore the features and make the most of your experience with The Dhrti Shelf.
        </h1>
      </div>
    </div>
  );
}
