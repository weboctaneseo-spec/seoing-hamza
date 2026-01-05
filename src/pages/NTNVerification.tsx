import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Smartphone, 
  Globe, 
  FileText, 
  ArrowRight,
  Shield,
  Clock,
  Users,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { StructuredData } from "@/components/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ntnFaqs = [
  {
    question: "What is an Active Taxpayer List (ATL)?",
    answer: "The Active Taxpayer List (ATL) is a register maintained by FBR containing individuals and companies who have filed their income tax returns. Being on the ATL means you're considered a 'filer' and are eligible for reduced withholding tax rates on various transactions."
  },
  {
    question: "What are the benefits of being an Active Taxpayer?",
    answer: "Active taxpayers enjoy significantly lower withholding tax rates on bank transactions, property purchases, vehicle registration, mobile phone purchases, and many other transactions. Non-filers pay almost double the withholding tax rates compared to filers."
  },
  {
    question: "How often is the ATL updated?",
    answer: "FBR updates the Active Taxpayer List on the 1st of March each year. To remain on the ATL, you must file your annual income tax return before the deadline (typically September 30th for individuals)."
  },
  {
    question: "What is the difference between NTN and CNIC for tax purposes?",
    answer: "NTN (National Tax Number) is a unique identifier issued by FBR for tax purposes. For individuals, your 13-digit CNIC number serves as your NTN. For businesses and companies, a separate NTN is issued by FBR."
  },
  {
    question: "What should I do if my status shows as 'Non-Filer'?",
    answer: "If your status shows as non-filer, you need to file your income tax return. Once filed and processed by FBR, your status will be updated to 'Filer' in the next ATL update. Contact Befiller for assistance with filing your tax return."
  },
  {
    question: "Can overseas Pakistanis be on the Active Taxpayer List?",
    answer: "Yes, overseas Pakistanis who have income in Pakistan or own assets in Pakistan should file tax returns to be on the ATL. This helps reduce withholding taxes on property transactions, bank transfers, and other financial activities in Pakistan."
  }
];

const NTNVerification = () => {
  const [searchType, setSearchType] = useState<"cnic" | "ntn">("cnic");
  const [searchValue, setSearchValue] = useState("");

  const formatCNIC = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 13);
    if (numbers.length <= 5) return numbers;
    if (numbers.length <= 12) return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 12)}-${numbers.slice(12)}`;
  };

  const formatNTN = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 7);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (searchType === "cnic") {
      setSearchValue(formatCNIC(value));
    } else {
      setSearchValue(formatNTN(value));
    }
  };

  const getSMSText = () => {
    const cleanValue = searchValue.replace(/-/g, "");
    return `ATL ${cleanValue}`;
  };

  const isValidInput = () => {
    const cleanValue = searchValue.replace(/-/g, "");
    if (searchType === "cnic") {
      return cleanValue.length === 13;
    }
    return cleanValue.length === 7;
  };

  return (
    <Layout>
      <Helmet>
        <title>NTN Verification & ATL Status Check | Befiller - Check FBR Active Taxpayer Status</title>
        <meta
          name="description"
          content="Check your FBR Active Taxpayer List (ATL) status online. Verify your NTN number and CNIC status with FBR Pakistan. Free NTN verification tool for individuals and businesses."
        />
        <meta
          name="keywords"
          content="NTN verification, ATL status check, FBR active taxpayer, check NTN status, CNIC tax status, Pakistan tax verification, filer non-filer status"
        />
        <link rel="canonical" href="https://befiller.pk/ntn-verification" />
      </Helmet>
      <StructuredData 
        type="calculator"
        pageTitle="NTN Verification & ATL Status Check | Befiller"
        pageDescription="Check your FBR Active Taxpayer List (ATL) status online. Verify your NTN number and CNIC status with FBR Pakistan."
        pageUrl="https://befiller.pk/ntn-verification"
        faqs={ntnFaqs}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <Search className="w-5 h-5" />
              <span className="text-sm font-medium">NTN Verification Tool</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Check Your Active Taxpayer
              <span className="text-secondary block mt-2">Status with FBR</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Verify your NTN number and check if you're on FBR's Active Taxpayer List (ATL). 
              Being a filer saves you money on withholding taxes across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Tool Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card className="border-2 border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <Search className="w-6 h-6 text-primary" />
                    Check ATL Status
                  </CardTitle>
                  <CardDescription>
                    Enter your CNIC or NTN number to check your taxpayer status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Search Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Verification Type</Label>
                    <RadioGroup
                      value={searchType}
                      onValueChange={(value) => {
                        setSearchType(value as "cnic" | "ntn");
                        setSearchValue("");
                      }}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cnic" id="cnic" />
                        <Label htmlFor="cnic" className="cursor-pointer">CNIC (Individuals)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ntn" id="ntn" />
                        <Label htmlFor="ntn" className="cursor-pointer">NTN (Businesses)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Input Field */}
                  <div className="space-y-3">
                    <Label htmlFor="search-input" className="text-base font-semibold">
                      {searchType === "cnic" ? "CNIC Number" : "NTN Number"}
                    </Label>
                    <Input
                      id="search-input"
                      type="text"
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder={searchType === "cnic" ? "XXXXX-XXXXXXX-X" : "XXXXXXX"}
                      className="text-lg h-12 font-mono tracking-wider"
                    />
                    <p className="text-sm text-muted-foreground">
                      {searchType === "cnic" 
                        ? "Enter your 13-digit CNIC number" 
                        : "Enter your 7-digit NTN number"}
                    </p>
                  </div>

                  {/* SMS Instructions */}
                  {isValidInput() && (
                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                      <div className="flex items-start gap-3">
                        <Smartphone className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm mb-1">Check via SMS</p>
                          <p className="text-sm text-muted-foreground mb-2">
                            Send the following text to <span className="font-mono font-bold">9966</span>:
                          </p>
                          <code className="bg-background px-3 py-2 rounded border font-mono text-primary block">
                            {getSMSText()}
                          </code>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FBR Portal Link */}
                  <Button 
                    variant="hero"
                    className="w-full h-12 text-lg"
                    asChild
                  >
                    <a 
                      href="https://e.fbr.gov.pk/registration/taxpayerprofileinquiry.aspx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Check on FBR Portal <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    You'll be redirected to FBR's official verification portal
                  </p>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card className="border-2 border-muted shadow-soft">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    ATL Status Explained
                  </CardTitle>
                  <CardDescription>
                    Understanding your taxpayer status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Filer Status */}
                  <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-700 dark:text-green-400">Active Taxpayer (Filer)</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You've filed your tax return and are on the ATL. You enjoy reduced withholding tax rates.
                      </p>
                    </div>
                  </div>

                  {/* Non-Filer Status */}
                  <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-700 dark:text-red-400">Non-Filer</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You haven't filed your tax return. You pay higher withholding tax rates on most transactions.
                      </p>
                    </div>
                  </div>

                  {/* Late Filer Status */}
                  <div className="flex items-start gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-700 dark:text-yellow-400">Late Filer</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You filed after the deadline. You may face penalties but can still become an active taxpayer.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/services/tax-filing">
                        Need Help Filing? Get Started <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Check Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Check Your ATL Status
              </h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to verify your active taxpayer status with FBR
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* SMS Method */}
              <Card className="border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Smartphone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-center">Via SMS</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p className="text-center">Send SMS to <span className="font-mono font-bold text-primary">9966</span></p>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="font-semibold text-foreground mb-1">For CNIC:</p>
                      <code className="text-xs">ATL [13-digit CNIC]</code>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="font-semibold text-foreground mb-1">For NTN:</p>
                      <code className="text-xs">ATL [7-digit NTN]</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Online Method */}
              <Card className="border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Globe className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-center">Online Portal</h3>
                  <div className="space-y-3 text-sm text-muted-foreground text-center">
                    <p>Visit FBR's official taxpayer verification portal</p>
                    <ol className="text-left space-y-2 list-decimal list-inside">
                      <li>Go to e.fbr.gov.pk</li>
                      <li>Click "Taxpayer Profile Inquiry"</li>
                      <li>Enter CNIC or NTN</li>
                      <li>View your status</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Befiller Method */}
              <Card className="border-2 border-secondary/30 hover:border-secondary/50 transition-all bg-secondary/5">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <FileText className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-center">Via Befiller</h3>
                  <div className="space-y-3 text-sm text-muted-foreground text-center">
                    <p>Let our experts check and manage your tax status</p>
                    <ul className="text-left space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Complete status verification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Tax filing assistance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>ATL registration help</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Being a Filer */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefits of Being an Active Taxpayer
              </h2>
              <p className="text-lg text-muted-foreground">
                Save money on withholding taxes across various transactions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Bank Transactions</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Lower withholding tax on cash withdrawals and banking transactions
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-semibold">Filer: 0.6%</span>
                    <span className="text-red-600">Non-Filer: 0.9%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Property Transactions</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Significantly reduced tax on property purchase and sale
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-semibold">Filer: 3%</span>
                    <span className="text-red-600">Non-Filer: 10%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Vehicle Registration</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Lower tax on vehicle purchase and registration
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-semibold">Filer: Standard rates</span>
                    <span className="text-red-600">Non-Filer: 2x rates</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Dividend & Profit</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Reduced withholding tax on dividends and profit on debt
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-semibold">Filer: 15%</span>
                    <span className="text-red-600">Non-Filer: 30%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about NTN verification and ATL status
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {ntnFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg border shadow-sm"
                >
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Not on the Active Taxpayer List?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Our tax experts can help you file your return and get on the ATL. 
              Available 24/7 for overseas Pakistanis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services/tax-filing">
                  File Your Tax Return <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NTNVerification;
