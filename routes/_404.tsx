import { Layout } from "../components/Layout.tsx";
import { Heading } from "../components/Heading.tsx";

export default function NotFound() {
  return (
    <Layout>
      <Heading level={2}>404 Not Found</Heading>
      <p class="mt-3 mb-96">
        アクセスされたページは削除されたか、あるいは存在しないようです。<br />サイト名を押下してTOPページにアクセスし直してください。
      </p>
    </Layout>
  );
}
