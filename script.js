const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let sum = 0;
	let total = document.querySelectorAll('.prices');
	total.forEach(price => {
		sum += parseInt(price.textContent);
	});
  const tot = document.createElement("tr");
  const tdata = document.createElement("td");
	tdata.setAttribute("id", "ans"); // REQUIRED for test
	tdata.setAttribute("colspan", "2");
	tdata.textContent = sum;
	
	tot.appendChild(tdata);
	
	let table = document.getElementById('table');
	table.appendChild(tot);
};

getSumBtn.addEventListener("click", getSum);

