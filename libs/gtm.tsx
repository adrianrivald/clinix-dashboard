export const gtmVirtualPageView = (rest: any) => {
  (window as any).dataLayer?.push({
    event: "VirtualPageView",
    ...rest,
  });
};
