const reportJSON = `{
  "app": "Portal",
  "status": "OK",
  "modules": {
    "auth": "OK",
    "payment": "OK",
    "results": "FAIL",
    "profile": "OK"
  }
}`;

function auditReport(reportJSON) {
  const report = JSON.parse(reportJSON);

  let okCount = 0;
  let failCount = 0;

  for (let module in report.modules) {
    let status = report.modules[module];

    if (status === "OK") {
      okCount++;
    } else if (status === "FAIL") {
      failCount++;
      break;
    }
  }

  const summary = {
    okCount: okCount,
    failCount: failCount
  };

  return JSON.stringify(summary);
}

const result = auditReport(reportJSON);
console.log(result);