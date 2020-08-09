export default function formatCurrency(num) {
  return "ILS" + Number(num.toFixed(1)).toLocaleString() + " ";
}
