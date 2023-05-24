window.addEventListener('DOMContentLoaded', (event) => {
  const connectButton = document.getElementById('connectWallet');
  const nftInfoSection = document.getElementById('nftInfo');
  const nftDetails = document.getElementById('nftDetails');

  // Check if Metamask is installed
  if (typeof window.ethereum === 'undefined') {
    connectButton.innerText = 'Metamask Not Found';
    connectButton.disabled = true;
  }

  // Connect Metamask
  connectButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        const address = accounts[0];
        nftInfoSection.style.display = 'block';
        displayNFTDetails(address);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // Fetch and display NFT details
  function displayNFTDetails(address) {
    // Replace this with your actual NFT contract address and ABI
    const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';
    const contractABI = [
      // Your contract's ABI here
    ];

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Replace this with your actual NFT token ID
    const tokenId = 1;

    contract.methods.tokenURI(tokenId).call()
      .then((tokenURI) => {
        fetch(tokenURI)
          .then((response) => response.json())
          .then((data) => {
            nftDetails.innerHTML = `
              <img src="${data.image}" alt="NFT Image" />
              <h3>${data.name}</h3>
              <p>${data.description}</p>
              <p>Owner: ${address}</p>
            `;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error.catch((error) => {
        console.error(error);
      });
  }
});

