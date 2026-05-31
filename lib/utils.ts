import { CurrencyItem } from "@/components/home/currency-ticker/currency-ticker";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencies: CurrencyItem[] = [
  {
    code: "GBP",
    name: "British Pound Sterling",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/unitedkingdom.png",
  },
  {
    code: "AUD",
    name: "Australian Dollar",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/australia.png",
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/japan.png",
  },
  {
    code: "HKD",
    name: "Hong Kong Dollar",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/hongkong.png",
  },
  {
    code: "NOK",
    name: "Norwegian Krone",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/norway.png",
  },
  {
    code: "AED",
    name: "United Arab Emirates Dirham",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/unitedarabemiratesdirham.png",
  },
  {
    code: "EUR",
    name: "Euro",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/euro.png",
  },
  {
    code: "USD",
    name: "United States Dollar",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/unitedstates.png",
  },
  {
    code: "DKK",
    name: "Danish Krone",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/denmark.png",
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/canada.png",
  },
  {
    code: "ISK",
    name: "Icelandic Króna",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/iceland.png",
  },
  {
    code: "SEK",
    name: "Swedish Krona",
    flagUrl:
      "https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/flags/sweden.png",
  },
];
