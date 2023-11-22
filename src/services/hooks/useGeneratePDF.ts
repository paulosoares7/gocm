import { useContext } from "react";
import { ParticulesContext } from "../../Interfaces/Types";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { useVelocityVerlet } from "./Verlet/useVelocityVerlet";
import { useCMparameters } from "./Verlet/useCMparameters";

export function useGeneratePDF() {
  const { particules } = useContext(ParticulesContext);
  const { tableData } = useVelocityVerlet();
  const { CM } = useCMparameters();

  const tablesValues = CM.data[0];

  function PDFGenerate() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const tableParticules = particules.map((particule) => [
      {
        text: ` ${particule.nameParticule}`,
        italics: true,
        alignment: "center",
      },
      { text: ` ${particule.positionX}`, italics: true, alignment: "center" },
      { text: ` ${particule.positionY}`, italics: true, alignment: "center" },
      { text: ` ${particule.degrees}`, italics: true, alignment: "center" },
      { text: ` ${particule.force}`, italics: true, alignment: "center" },
      { text: ` ${particule.mass}`, italics: true, alignment: "center" },
    ]);
    const tableParticulesVerlet = tableData.map((Verlet) => [
      { text: ` ${Verlet.i}`, italics: true, alignment: "center" },
      { text: ` ${Verlet.t}`, italics: true, alignment: "center" },
      { text: ` ${Verlet.r}`, italics: true, alignment: "center" },
      { text: ` ${Verlet.v}`, italics: true, alignment: "center" },
      { text: ` ${Verlet.a}`, italics: true, alignment: "center" },
      { text: ` ${Verlet.kineticEnergy}`, italics: true, alignment: "center" },
    ]);

    const docDefinitions: TDocumentDefinitions = {
      defaultStyle: { font: "Roboto" },

      pageSize: "A4",
      pageMargins: [25, 50, 250, 40],

      header: [
        {
          text: "Relatório - Sistema de partícula",
          style: "header",
          fontSize: 14,
          bold: true,
          margin: [15, 20, 0, 8], //left , top, right,  bottom
        },
      ],

      content: [
        {
          text: "Parametros do centro de massa",
          fontSize: 14,
          bold: true,
          margin: [10, 20, 0, 8],
        },
        {
          style: "tableExample",

          table: {
            widths: [180, 180, 180],
            headerRows: 1,
            body: [
              [
                { text: "Valores:", style: "tableHeader", italics: true },
                { text: "", style: "tableHeader" },
                { text: "", style: "tableHeader" },
              ],
              [
                { text: `Posição x (m): ${tablesValues.x}`, italics: true },
                { text: `Posição y (m): ${tablesValues.y}`, italics: true },
                {
                  text: `Mód. da posição (m): ${tablesValues.rCmR}`,
                  italics: true,
                },
              ],
              [
                {
                  text: `Comp. x da Força (N): ${tablesValues.fx}`,
                  italics: true,
                },
                {
                  text: `Comp. y da Força (N): ${tablesValues.fy}`,
                  italics: true,
                },
                {
                  text: `Mód. da Força (N): ${tablesValues.fr}`,
                  italics: true,
                },
              ],
              [
                {
                  text: `Comp. x da Acel. (m/s²): ${tablesValues.aCmX}`,
                  italics: true,
                },
                {
                  text: `Comp. y da Acel. (m/s²): ${tablesValues.aCmY}`,
                  italics: true,
                },
                {
                  text: `Mód. da Acel. (m/s²): ${tablesValues.aCmR}`,
                  italics: true,
                },
              ],
              [
                {
                  text: `Massa resultante (Kg): ${tablesValues.mr}`,
                  italics: true,
                },
                "",
                "",
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          text: "Parametros das Partículas",
          fontSize: 14,
          bold: true,
          margin: [10, 20, 0, 8],
        },
        {
          style: "tableExample",

          table: {
            widths: [75, 50, 50, 100, 100, 75],
            headerRows: 1,
            body: [
              [
                {
                  text: "Partícula:",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "x(m):",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "y(m)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Grau em rel. a x",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Força atuante (N)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Massa (Kg)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
              ],
              ...tableParticules,
            ],
          },
          layout: "lightHorizontalLines",
        },
        {
          text: "Parametros do centro de massa em relação  ao tempo",
          fontSize: 14,
          bold: true,
          margin: [10, 35, 0, 8],
        },
        {
          style: "tableExample",

          table: {
            widths: [20, 30, 70, 125, 125, 75, 50],
            headerRows: 1,
            body: [
              [
                {
                  text: "i",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "t (s)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Mod. da posição (m)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Mod. da Velocidade (m/s)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Mod. da Aceleração (m/s²)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
                {
                  text: "Energia (J)",
                  style: "tableHeader",
                  italics: true,
                  alignment: "center",
                },
              ],
              ...tableParticulesVerlet,
            ],
          },
          layout: "lightHorizontalLines",
        },
      ],
      footer: [],
    };
    pdfMake.createPdf(docDefinitions).download("relatório.pdf");
  }
  return {
    PDFGenerate,
  };
}
