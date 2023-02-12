import { Layout } from "../components/Layout.tsx";
import { Heading } from "../components/Heading.tsx";

const TITLE = "404 Not Found";

export default function NotFound() {
  return (
    <Layout
      title={TITLE}
      description="お探しのページは見つかりませんでした"
      type="website"
    >
      <Heading level={2}>{TITLE}</Heading>
      <p class="mt-3 mb-96">
        アクセスされたページは削除されたか、あるいは存在しないようです。<br />サイト名を押下してTOPページにアクセスし直してください。
      </p>
    </Layout>
  );
}
