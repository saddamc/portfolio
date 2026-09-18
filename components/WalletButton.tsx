// "use client";

// import { useMetaMask } from "@/hooks/useMetaMask";

// export default function WalletButton() {
//   const { account, connect } = useMetaMask();

//   return (
//     <div>
//       {account ? (
//         <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
//       ) : (
//         <button 
//           onClick={connect}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//         >
//           Connect MetaMask
//         </button>
//       )}
//     </div>
//   );
// }
