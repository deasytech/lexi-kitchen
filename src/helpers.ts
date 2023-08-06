import { IBreadcrumbItem, IItem, NavItem } from "./models";

export const navItems: NavItem[] = [
  {
    label: "Dishes",
    href: "/dishes",
  },
  {
    label: "Categories",
    href: "/categories",
  },
];

export const defaultBreadCrubItems: IBreadcrumbItem[] = [
  {
    name: "Dishes",
    link: "/dishes",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];

export const getSubstring = (text: string, substringEnd: number): string => {
  return text?.length > substringEnd
    ? `${text?.substring(0, substringEnd)}...`
    : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
