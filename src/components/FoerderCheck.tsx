import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CalendlyButton from "@/components/CalendlyButton";

interface FormData {
  mitarbeiter: string;
  unternehmensalter: string;
  bundesland: string;
  branche: string;
  vorhaben: string[];
  vorname: string;
  nachname: string;
  email: string;
  unternehmen: string;
}

const BUNDESLAENDER = [
  "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen",
  "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen",
  "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen",
  "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen",
];

const MITARBEITER_OPTIONS = [
  "Bis 9 Mitarbeiter",
  "10 bis 49 Mitarbeiter",
  "50 bis 249 Mitarbeiter",
  "250 oder mehr",
];

const ALTER_OPTIONS = [
  "Weniger als 2 Jahre",
  "2 bis 5 Jahre",
  "Mehr als 5 Jahre",
];

const BRANCHEN = [
  "Handel", "Handwerk", "Dienstleistung",
  "Produktion / Industrie", "Gesundheit / Soziales", "Sonstige",
];

const VORHABEN = [
  "Prozesse automatisieren",
  "Kosten senken",
  "Mitarbeiter entlasten",
  "Kundenservice verbessern",
  "Nachhaltigkeit verbessern",
];

const WEBHOOK_URL = "https://n8n.srv929188.hstgr.cloud/webhook/fe97e9e3-f45a-4bba-9e5f-82cead14235f";

const FoerderCheck = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [screen, setScreen] = useState<"form" | "summary" | "done">("form");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [data, setData] = useState<FormData>({
    mitarbeiter: "",
    unternehmensalter: "",
    bundesland: "",
    branche: "",
    vorhaben: [],
    vorname: "",
    nachname: "",
    email: "",
    unternehmen: "",
  });

  const reset = () => {
    setStep(1);
    setScreen("form");
    setLoading(false);
    setData({
      mitarbeiter: "", unternehmensalter: "", bundesland: "",
      branche: "", vorhaben: [], vorname: "", nachname: "",
      email: "", unternehmen: "",
    });
  };

  const handleOpen = (val: boolean) => {
    setOpen(val);
    if (!val) reset();
  };

  const canNext = (): boolean => {
    switch (step) {
      case 1: return !!data.mitarbeiter;
      case 2: return !!data.unternehmensalter;
      case 3: return !!data.bundesland;
      case 4: return !!data.branche;
      case 5: return data.vorhaben.length > 0;
      case 6: return !!data.vorname.trim() && !!data.nachname.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      default: return false;
    }
  };

  const next = () => {
    if (step < 6) setStep(step + 1);
    else setScreen("summary");
  };

  const back = () => {
    if (screen === "summary") { setScreen("form"); return; }
    if (step > 1) setStep(step - 1);
  };

  const toggleVorhaben = (v: string) => {
    setData(prev => ({
      ...prev,
      vorhaben: prev.vorhaben.includes(v)
        ? prev.vorhaben.filter(x => x !== v)
        : [...prev.vorhaben, v],
    }));
  };

  const submit = async () => {
    setLoading(true);
    try {
      const payload = {
        mitarbeiter: data.mitarbeiter,
        unternehmensalter: data.unternehmensalter,
        bundesland: data.bundesland,
        branche: data.branche,
        vorhaben: data.vorhaben,
        vorname: data.vorname.trim(),
        nachname: data.nachname.trim(),
        email: data.email.trim(),
        unternehmen: data.unternehmen.trim(),
      };
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setScreen("done");
    } catch {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const RadioCard = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 font-light ${
        selected
          ? "border-primary bg-primary/5 text-foreground"
          : "border-card-border/30 hover:border-primary/30 text-muted-foreground"
      }`}
    >
      {label}
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-light mb-4">Wie viele Mitarbeiter hat Ihr Unternehmen?</h3>
            {MITARBEITER_OPTIONS.map(opt => (
              <RadioCard key={opt} label={opt} selected={data.mitarbeiter === opt} onClick={() => setData({ ...data, mitarbeiter: opt })} />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-light mb-4">Wie lange besteht Ihr Unternehmen?</h3>
            {ALTER_OPTIONS.map(opt => (
              <RadioCard key={opt} label={opt} selected={data.unternehmensalter === opt} onClick={() => setData({ ...data, unternehmensalter: opt })} />
            ))}
          </div>
        );
      case 3:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-light mb-4">In welchem Bundesland ist Ihr Unternehmen ansässig?</h3>
            <Select value={data.bundesland} onValueChange={v => setData({ ...data, bundesland: v })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Bundesland auswählen" />
              </SelectTrigger>
              <SelectContent>
                {BUNDESLAENDER.map(bl => (
                  <SelectItem key={bl} value={bl}>{bl}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      case 4:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-light mb-4">In welcher Branche sind Sie tätig?</h3>
            {BRANCHEN.map(opt => (
              <RadioCard key={opt} label={opt} selected={data.branche === opt} onClick={() => setData({ ...data, branche: opt })} />
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-light mb-4">Was möchten Sie mit KI oder Digitalisierung erreichen?</h3>
            <p className="text-sm text-muted-foreground mb-2">Mehrfachauswahl möglich</p>
            {VORHABEN.map(v => (
              <button
                key={v}
                type="button"
                onClick={() => toggleVorhaben(v)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 font-light flex items-center gap-3 ${
                  data.vorhaben.includes(v)
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-card-border/30 hover:border-primary/30 text-muted-foreground"
                }`}
              >
                <Checkbox checked={data.vorhaben.includes(v)} className="pointer-events-none" />
                {v}
              </button>
            ))}
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-light mb-4">Damit wir Ihre persönliche Förderanalyse erstellen können:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vorname">Vorname *</Label>
                <Input id="vorname" value={data.vorname} onChange={e => setData({ ...data, vorname: e.target.value })} placeholder="Vorname" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachname">Nachname *</Label>
                <Input id="nachname" value={data.nachname} onChange={e => setData({ ...data, nachname: e.target.value })} placeholder="Nachname" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail-Adresse *</Label>
              <Input id="email" type="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="ihre@email.de" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unternehmen">Unternehmen (optional)</Label>
              <Input id="unternehmen" value={data.unternehmen} onChange={e => setData({ ...data, unternehmen: e.target.value })} placeholder="Firmenname" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-accent text-accent-foreground hover:bg-accent-hover shadow-primary font-semibold tracking-wide h-14 px-8 text-base rounded-lg"
      >
        Jetzt Fördercheck starten
      </Button>

      <Dialog open={open} onOpenChange={handleOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-0">
          {screen === "done" ? (
            <div className="p-6 sm:p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-thin tracking-tight">Ihre Anfrage ist eingegangen</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground font-light leading-relaxed">
                Wir prüfen jetzt, welche Förderprogramme für Sie in Frage kommen, und melden uns innerhalb von 24 Stunden per E-Mail.
              </p>
              <CalendlyButton text="Termin vereinbaren" variant="cta" size="lg" icon={false} />
            </div>
          ) : screen === "summary" ? (
            <div className="p-6 sm:p-8 space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-thin tracking-tight text-center">Fast geschafft!</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground font-light leading-relaxed text-center">
                Klicken Sie auf den Button, um Ihre persönliche Förderanalyse anzufordern. Wir senden Ihnen das Ergebnis innerhalb von 24 Stunden per E-Mail zu – kostenlos und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={back} className="sm:flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
                <Button
                  onClick={submit}
                  disabled={loading}
                  className="sm:flex-1 bg-accent text-accent-foreground hover:bg-accent-hover font-semibold"
                >
                  {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Kostenlos prüfen lassen
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground font-light">
                  <span>Schritt {step} von 6</span>
                  <span>{Math.round((step / 6) * 100)}%</span>
                </div>
                <Progress value={(step / 6) * 100} className="h-2" />
              </div>

              {renderStep()}

              {/* Navigation */}
              <div className="flex gap-3 pt-2">
                {step > 1 && (
                  <Button variant="outline" onClick={back} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                  </Button>
                )}
                <Button
                  onClick={next}
                  disabled={!canNext()}
                  className={`flex-1 bg-primary text-primary-foreground hover:bg-primary-hover ${step === 1 ? "w-full" : ""}`}
                >
                  {step === 6 ? "Weiter zur Übersicht" : "Weiter"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FoerderCheck;
