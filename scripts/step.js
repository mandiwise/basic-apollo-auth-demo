import { exec } from "child_process";

(function () {
  const commits = [
    "2a8d509",
    "e1def15",
    "cc0234a",
    "f067745",
    "f2d8268",
    "8a9600e",
    "b4594eb",
    "dadc72e",
    "db36e3e",
    "4fc014d"
  ];
  const step = parseInt(process.argv.slice(2)[0]);

  exec(`git checkout ${commits[step]}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
})();
