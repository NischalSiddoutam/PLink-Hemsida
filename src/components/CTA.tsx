import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-700 to-orange-500 py-20 px-6 text-center text-white rounded-3xl max-w-5xl mx-auto shadow-lg">
      <h2 className="text-4xl font-bold mb-6">
        Börja din smarta parkeringsresa med P Link idag!
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Ladda ner appen och låt Parky hjälpa dig hitta, boka och betala din parkering snabbt och enkelt.
      </p>
      <Button size="lg" className="bg-white text-emerald-900 font-semibold px-10 py-4 hover:bg-emerald-50">
        Ladda ner P Link
      </Button>
    </section>
  );
};

export default CTA;
