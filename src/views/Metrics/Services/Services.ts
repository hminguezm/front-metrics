export const average = (
  data: Array<{
    a: any;
    value: Array<number>;
  }>,
): Array<{ a: string; value: number }> => {
  return data.map(({ a, value }) => {
    const sum =
      value.reduce((a: number, b: number) => Number(a) + Number(b)) /
      value.length;
    return {
      a,
      value: sum,
    };
  });
};

export const dates = (data: Array<never>, type: string): any => {
  return [
    ...data
      .reduce((m, o) => {
        // @ts-ignore
        const date = new Date(o.createdAt);
        const day = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
        );

        let a: any;
        switch (type) {
          case 'day':
            a = day.toLocaleDateString();
            break;
          case 'hour':
            a = day.toLocaleDateString() + ' ' + date.getHours() + ':' + '00';
            break;
          case 'minute':
            a =
              day.toLocaleDateString() +
              ' ' +
              date.getHours() +
              ':' +
              date.getMinutes();
            break;
          default:
        }

        const item = m.get(a) || { a, value: [] };
        // @ts-ignore
        item.value.push(o.value);

        return m.set(a, item);
      }, new Map())
      .values(),
  ];
};

export const charData = (data: any): any => {
  return {
    options: {
      series: [
        {
          name: 'Amount',
          data: data.map((a: { value: number }) => Number(a.value.toFixed(3))),
        },
      ],
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: data.map((item: { a: any }) => item.a),
      },
    },
  };
};
