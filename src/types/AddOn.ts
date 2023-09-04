interface AddOn {
  name: string;
  description: string;
  prices: {
    monthly: number;
    yearly: number;
  };
}

export default AddOn;
