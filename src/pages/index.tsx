import Layout from "@/modules/common/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to FOSO</h1>
        <p className="mb-4">This is the home page of FOSO.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Visit our blog
        </Link>
      </div>
    </Layout>
  );
}