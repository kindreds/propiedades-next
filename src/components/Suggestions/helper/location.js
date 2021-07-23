import data from "../data/data";

const parse = (i) => parseInt(i) + 1;

const sleep = async (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

export const handleList = async (v) => {
  await sleep(500);

  if (v === "") return [];
  if (v.length < 3) return [];

  let payload = [];
  const departamentos = Object.keys(data);

  for (const indexDepar in departamentos) {
    const depar = departamentos[indexDepar].toLowerCase();
    const input = v.toLowerCase();
    if (depar.indexOf(input) !== -1) {
      const info = departamentos[indexDepar];
      payload.push({ label: info, value: parse(indexDepar) });
    }

    const provincias = Object.keys(data[departamentos[indexDepar]]);

    for (const indexProv in provincias) {
      const input = v.toLowerCase();
      const prov = provincias[indexProv].toLowerCase();
      if (prov.indexOf(input) !== -1) {
        const info = provincias[indexProv];
        payload.push({
          value: `${parse(indexDepar)},${parse(indexProv)}`,
          label: `${info} - ${departamentos[indexDepar]}`,
        });
      }

      const distritos = Object.keys(
        data[departamentos[indexDepar]][provincias[indexProv]]
      );

      for (const indexDist in distritos) {
        const input = v.toLowerCase();
        const dist = distritos[indexDist].toLowerCase();
        if (dist.indexOf(input) !== -1) {
          const info = distritos[indexDist];
          payload.push({
            value: `${parse(indexDepar)},${parse(indexProv)},${parse(
              indexDist
            )}`,
            label: `${info} - ${provincias[indexProv]} - ${departamentos[indexDepar]}`,
          });
        }
      }
    }
  }

  return payload;
};
