interface Plan {
  name: string;
  iconUrl: string;
  prices: {
    monthly: number;
    yearly: number;
  };
}

export default Plan;
