const urlData = process.env.URL_DADOS_MOCKADOS as string;

interface IFactProps {
  ano: number;
  fato: string;
}

export default class GetHistoricalFactService {
  private async getData(urlData: string) {
    try {
      const facts: IFactProps[] = await fetch(urlData).then((response) =>
        response.json()
      );
      return facts;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  private findFact(facts: IFactProps[], year: number) {
    let selectedFact = facts.find((fact) => {
      return fact.ano === year;
    });

    return selectedFact?.fato;
  }

  async execute(yearEntered: string) {
    const facts = await this.getData(urlData);
    if (facts !== null) {
      const selectedFact = this.findFact(facts!, Number(yearEntered));
      return selectedFact;
    } else {
      return { erro: 'Fato histórico não encontrado' };
    }
  }
}
