export function displayPriceBreakdownDescription(description: string): string {
  const lower = description.toLowerCase();
  if (
    lower.includes("distance pricing") ||
    lower.includes("per mi") ||
    lower.includes("per mile")
  ) {
    return "Base price";
  }
  return description;
}

export function formatGbp(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}
