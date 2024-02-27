import Divider from "@/ui/divider";
import Headline from "@/ui/headline";
import Interactive from "@/ui/charts/3d/interactive";
import MultipleTrace from "@/ui/charts/3d/multiple-trace";
import Search from "@/ui/charts/3d/search";
import SingleTrace from "@/ui/charts/3d/single-trace";

export default function ThreeDPage() {
  return (
    <main>
      <div className="container mb-20">
        <Headline>3D Charts</Headline>

        <div className="space-y-10">
          <Divider label="Single Trace: plotly.js" />
          <section>
            <SingleTrace />
          </section>
          <Divider label="Multiple Trace plotly.js" />
          <section>
            <MultipleTrace />
          </section>
          <Divider label="Search plotly.js" />
          <section>
            <Search />
          </section>
          <Divider label="Interactive plot selection" />
          <section>
            <Interactive />
          </section>
        </div>
      </div>
    </main>
  );
}
