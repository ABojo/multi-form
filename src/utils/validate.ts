const validate = {
  name: function (str: string): boolean {
    if (str) return true;

    return false;
  },
  email: function (str: string): boolean {
    const regExp = new RegExp(/^\S+@\S+\.\S+$/);
    return regExp.test(str);
  },
  phoneNumber: function (str: string): boolean {
    const regExp = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im);
    return regExp.test(str);
  },
};

export default validate;
