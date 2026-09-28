import { useState } from "react";

const Dooc = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [domain, setDomain] = useState("");

  const fetchDomains = async () => {
    try {
      let res = await fetch("https://apithesaurus.isca.ac.ir/v1/domains");
      let data = await res.json();
      setIsLoading(false);
      setDomain(data);
    } catch (error) {
      setIsLoading(false);
      console.error(error, "can not get the domains");
    }
  };
  fetchDomains();

  return <div>{isLoading == false ? { domain } : "بدون داده"}</div>;
};

export default Dooc;
