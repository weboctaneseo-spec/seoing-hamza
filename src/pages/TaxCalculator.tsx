import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, TrendingUp, PiggyBank, Users, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Tax slabs for salaried individuals (FY 2024-2025)
const salariedSlabs = [
  { min: 0, max: 600000, fixedTax: 0, rate: 0 },
  { min: 600001, max: 1200000, fixedTax: 0, rate: 5, prevMax: 600000 },
  { min: 1200001, max: 2200000, fixedTax: 30000, rate: 15, prevMax: 1200000 },
  { min: 2200001, max: 3200000, fixedTax: 180000, rate: 25, prevMax: 2200000 },
  { min: 3200001, max: 4100000, fixedTax: 430000, rate: 30, prevMax: 3200000 },
  { min: 4100001, max: Infinity, fixedTax: 700000, rate: 35, prevMax: 4100000 },
];

// Tax slabs for non-salaried individuals (FY 2024-2025)
const nonSalariedSlabs = [
  { min: 0, max: 600000, fixedTax: 0, rate: 0 },
  { min: 600001, max: 1200000, fixedTax: 0, rate: 15, prevMax: 600000 },
  { min: 1200001, max: 1600000, fixedTax: 90000, rate: 20, prevMax: 1200000 },
  { min: 1600001, max: 3200000, fixedTax: 170000, rate: 30, prevMax: 1600000 },
  { min: 3200001, max: 5600000, fixedTax: 650000, rate: 40, prevMax: 3200000 },
  { min: 5600001, max: Infinity, fixedTax: 1610000, rate: 45, prevMax: 5600000 },
];

const TaxCalculator = () => {
  const [incomeType, setIncomeType] = useState<"monthly" | "yearly">("monthly");
  const [taxpayerType, setTaxpayerType] = useState<"salaried" | "non-salaried">("salaried");
  const [income, setIncome] = useState<string>("");
  const [result, setResult] = useState<{
    annualIncome: number;
    taxAmount: number;
    effectiveRate: number;
    monthlyTax: number;
    netIncome: number;
    slab: typeof salariedSlabs[0] | null;
  } | null>(null);

  const calculateTax = () => {
    const numIncome = parseFloat(income.replace(/,/g, "")) || 0;
    const annualIncome = incomeType === "monthly" ? numIncome * 12 : numIncome;
    
    const slabs = taxpayerType === "salaried" ? salariedSlabs : nonSalariedSlabs;
    
    let taxAmount = 0;
    let applicableSlab = slabs[0];
    
    for (const slab of slabs) {
      if (annualIncome >= slab.min && annualIncome <= slab.max) {
        applicableSlab = slab;
        if (slab.rate === 0) {
          taxAmount = 0;
        } else {
          const taxableAmount = annualIncome - (slab.prevMax || 0);
          taxAmount = slab.fixedTax + (taxableAmount * slab.rate) / 100;
        }
        break;
      }
    }
    
    const effectiveRate = annualIncome > 0 ? (taxAmount / annualIncome) * 100 : 0;
    const monthlyTax = taxAmount / 12;
    const netIncome = annualIncome - taxAmount;
    
    setResult({
      annualIncome,
      taxAmount,
      effectiveRate,
      monthlyTax,
      netIncome,
      slab: applicableSlab,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value) {
      setIncome(new Intl.NumberFormat("en-PK").format(parseInt(value)));
    } else {
      setIncome("");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Pakistan Income Tax Calculator 2024-2025 | Befiller - Free Tax Estimation Tool</title>
        <meta
          name="description"
          content="Calculate your Pakistan income tax for FY 2024-2025. Free online tax calculator for salaried and non-salaried individuals. Get instant tax liability estimates based on FBR tax slabs."
        />
        <meta
          name="keywords"
          content="Pakistan tax calculator, income tax calculator, FBR tax slabs 2024-2025, salary tax calculator Pakistan, tax estimation tool"
        />
        <link rel="canonical" href="https://befiller.pk/tax-calculator" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-medium">Free Tax Calculator</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Pakistan Income Tax Calculator
              <span className="text-secondary block mt-2">FY 2024-2025</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Calculate your Pakistani income tax liability instantly. Our free calculator uses the latest 
              FBR tax slabs to give you accurate tax estimates for both salaried and non-salaried individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card className="border-2 border-primary/10 shadow-soft">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-primary" />
                    Enter Your Income
                  </CardTitle>
                  <CardDescription>
                    Fill in your details to calculate your tax liability
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Taxpayer Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Taxpayer Type</Label>
                    <RadioGroup
                      value={taxpayerType}
                      onValueChange={(value) => setTaxpayerType(value as "salaried" | "non-salaried")}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="salaried" id="salaried" />
                        <Label htmlFor="salaried" className="cursor-pointer">Salaried</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-salaried" id="non-salaried" />
                        <Label htmlFor="non-salaried" className="cursor-pointer">Non-Salaried / Business</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Income Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Income Type</Label>
                    <RadioGroup
                      value={incomeType}
                      onValueChange={(value) => setIncomeType(value as "monthly" | "yearly")}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">Monthly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yearly" id="yearly" />
                        <Label htmlFor="yearly" className="cursor-pointer">Yearly</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Income Input */}
                  <div className="space-y-3">
                    <Label htmlFor="income" className="text-base font-semibold">
                      {incomeType === "monthly" ? "Monthly" : "Yearly"} Income (PKR)
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                        Rs.
                      </span>
                      <Input
                        id="income"
                        type="text"
                        value={income}
                        onChange={handleIncomeChange}
                        placeholder="Enter your income"
                        className="pl-12 text-lg h-12"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateTax} 
                    className="w-full h-12 text-lg"
                    variant="hero"
                  >
                    Calculate Tax
                  </Button>
                </CardContent>
              </Card>

              {/* Result Card */}
              <Card className={`border-2 shadow-soft transition-all duration-300 ${result ? "border-secondary" : "border-muted"}`}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    Tax Calculation Results
                  </CardTitle>
                  <CardDescription>
                    {result ? "Your estimated tax liability" : "Enter your income to see results"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {result ? (
                    <div className="space-y-6">
                      {/* Main Result */}
                      <div className="bg-primary/5 rounded-xl p-6 text-center border border-primary/10">
                        <p className="text-sm text-muted-foreground mb-1">Annual Tax Payable</p>
                        <p className="font-heading text-4xl md:text-5xl font-bold text-primary">
                          {formatCurrency(result.taxAmount)}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Effective Tax Rate: {result.effectiveRate.toFixed(2)}%
                        </p>
                      </div>

                      {/* Breakdown */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Annual Income</p>
                          <p className="font-semibold text-lg">{formatCurrency(result.annualIncome)}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Monthly Tax</p>
                          <p className="font-semibold text-lg">{formatCurrency(result.monthlyTax)}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Net Annual Income</p>
                          <p className="font-semibold text-lg text-primary">{formatCurrency(result.netIncome)}</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Tax Slab Rate</p>
                          <p className="font-semibold text-lg">{result.slab?.rate || 0}%</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                        <p className="text-sm font-medium mb-2">Need help filing your taxes?</p>
                        <Button variant="hero" size="sm" asChild className="w-full">
                          <Link to="/services/tax-filing">
                            Get Professional Tax Filing <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <PiggyBank className="w-16 h-16 text-muted-foreground/30 mb-4" />
                      <p className="text-muted-foreground">
                        Enter your income details to calculate your tax liability
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Slabs Table */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pakistan Income Tax Slabs 2024-2025
              </h2>
              <p className="text-lg text-muted-foreground">
                Current FBR tax rates for salaried individuals
              </p>
            </div>

            <Card className="shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Annual Income Range (PKR)</th>
                      <th className="px-6 py-4 text-left font-semibold">Fixed Tax</th>
                      <th className="px-6 py-4 text-left font-semibold">Rate on Excess</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Up to Rs. 600,000</td>
                      <td className="px-6 py-4">Nil</td>
                      <td className="px-6 py-4 text-primary font-semibold">0%</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Rs. 600,001 – Rs. 1,200,000</td>
                      <td className="px-6 py-4">Nil</td>
                      <td className="px-6 py-4 text-primary font-semibold">5%</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Rs. 1,200,001 – Rs. 2,200,000</td>
                      <td className="px-6 py-4">Rs. 30,000</td>
                      <td className="px-6 py-4 text-primary font-semibold">15%</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Rs. 2,200,001 – Rs. 3,200,000</td>
                      <td className="px-6 py-4">Rs. 180,000</td>
                      <td className="px-6 py-4 text-primary font-semibold">25%</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Rs. 3,200,001 – Rs. 4,100,000</td>
                      <td className="px-6 py-4">Rs. 430,000</td>
                      <td className="px-6 py-4 text-primary font-semibold">30%</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Above Rs. 4,100,000</td>
                      <td className="px-6 py-4">Rs. 700,000</td>
                      <td className="px-6 py-4 text-primary font-semibold">35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <p className="text-sm text-muted-foreground text-center mt-4">
              * Tax slabs as per Finance Act 2024. Subject to changes by FBR.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Use Our Tax Calculator?
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by thousands of Pakistanis for accurate tax estimation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calculator className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">100% Accurate</h3>
                  <p className="text-muted-foreground">
                    Based on official FBR tax slabs for fiscal year 2024-2025
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">For Everyone</h3>
                  <p className="text-muted-foreground">
                    Supports both salaried employees and business individuals
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Instant Results</h3>
                  <p className="text-muted-foreground">
                    Get your tax estimate in seconds with detailed breakdown
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Need Professional Tax Filing Assistance?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Our expert tax consultants can help you file your taxes correctly and maximize your savings. 
              Available 24/7 for overseas Pakistanis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services/tax-filing">File Your Taxes Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TaxCalculator;
