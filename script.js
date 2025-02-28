const first = document.querySelector("#first");
const last = document.querySelector("#last");
const table = document.querySelector("#table");

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const handleGenerate = () => {
  let primes = [];
  for (let i = first.value; i <= last.value; i++) {
    if (isPrime(i)) primes.push(i);
  }
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = `Bilangan Prima Antara ${first.value} dan ${last.value}`;
  td.style.fontWeight = "bold";
  tr.appendChild(td);
  table.appendChild(tr);
  primes.map((prime) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = prime;
    tr.appendChild(td);
    table.appendChild(tr);
  });
};
