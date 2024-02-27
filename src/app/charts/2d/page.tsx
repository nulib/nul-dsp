import Divider from "@/ui/divider";
import Headline from "@/ui/headline";
import Simple from "@/ui/charts/2d/simple";

export default function TwoDPage() {
  return (
    <main>
      <div className="container mb-20">
        <Headline>2D Charts</Headline>

        <div className="space-y-10">
          <Divider label="Scatter Plot: d3.js" />
          <section>
            <Simple />
          </section>
        </div>
      </div>
    </main>
  );
}
