// import { useEffect, useState } from "react";

// export function useMetaMask() {
//   const [account, setAccount] = useState<string | null>(null);

//   // connect wallet
//   const connect = async () => {
//     if (typeof window.ethereum !== "undefined") {
//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         setAccount(accounts[0]);
//       } catch (err) {
//         console.error("User rejected connection:", err);
//       }
//     } else {
//       alert("MetaMask not detected! Please install MetaMask.");
//     }
//   };

//   // listen for account changes
//   useEffect(() => {
//     if (typeof window.ethereum !== "undefined") {
//       window.ethereum.on("accountsChanged", (accounts: string[]) => {
//         setAccount(accounts.length > 0 ? accounts[0] : null);
//       });
//     }
//   }, []);

//   return { account, connect };
// }
