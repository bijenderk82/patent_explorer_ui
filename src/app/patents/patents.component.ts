import {Component, OnInit} from '@angular/core';
import { ApiService } from '../shared/app.service';
import { Router } from '@angular/router';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const patents = [
  {
      "productLinkPath": "/BDSS-API/products/PTOFFACT",
      "productIdentifier": 14799,
      "productShortName": "PTOFFACT",
      "productDesc": "Contains detailed information on 4.4 million Office actions mailed from 2008 through June 2017 for 2.2 million publicly viewable patent applications. The data are sourced from the text of Non-Final Rejection and Final Rejection Office actions issued by patent examiners to applicants during the patent examination process. The data files include information on grounds for rejection raised, the claims in question, and pertinent prior art.",
      "productTitle": "Patent application Office actions data (stata (.dta) and MS Excel (.csv))",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2017-11-29",
      "productToDate": "2017-11-29",
      "numberOfFiles": 9,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7868853",
              "fileIdentifier": 7868853,
              "fileName": "csv.zip",
              "fileSize": 666307740,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/office/actions/bigdata/2017/csv.zip",
              "fileFromTime": "2017-11-29",
              "fileToTime": "2017-11-29",
              "fileType": "Data",
              "fileReleaseDate": "2017-11-29"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTMNFEE2",
      "productIdentifier": 14801,
      "productShortName": "PTMNFEE2",
      "productDesc": "Contains recorded maintenance fee events for patents granted from September 1, 1981 to present. Each new weekly file (Tuesday) is cumulative with a file format of ASCII.",
      "productTitle": "Patent maintenance fee events and description files",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2018-06-21",
      "productToDate": "2023-12-19",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900018",
              "fileIdentifier": 7900018,
              "fileName": "MaintFeeEvents.zip",
              "fileSize": 166608985,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/maintenancefee/MaintFeeEvents.zip",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTAPOATH",
      "productIdentifier": 14802,
      "productShortName": "PTAPOATH",
      "productDesc": "Contains a research dataset of images of signatures extracted from patent inventor oath documents used for validation of micro entity certifications ranging from SEP 1998 to SEP 2022. It includes 883,811 documents and oath document signature images, is 40.5 GB of total size, and is broken into 8 zip files for the Patent Application Series Codes 12 to 17, 29, and 35. Each of these zip files contain folders for each application number in a given series. The application folders contain the oath document identifier that includes the image(s) of the signature(s) as PNG, and JSON file that contains the application number, the inventor name(s), and confidence level of the signature extraction algorithm.",
      "productTitle": "Patent and patent application Oath Signature data (JSON and PNG)",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2022-09-30",
      "productToDate": "2022-09-30",
      "numberOfFiles": 8,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7868864",
              "fileIdentifier": 7868864,
              "fileName": "16_series_oath_documents.zip",
              "fileSize": 6762179192,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/oath/signature/2022/16_series_oath_documents.zip",
              "fileFromTime": "2022-09-30",
              "fileToTime": "2022-09-30",
              "fileType": "Data",
              "fileReleaseDate": "2022-09-30"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/MCFAPPL",
      "productIdentifier": 14803,
      "productShortName": "MCFAPPL",
      "productDesc": "Current U.S. classification information for all patent applications (non-provisional utility and plant) published by the USPTO from March 15, 2001 to present. Approx. 450 main divisions of technology, called classifications/classes, broken into approx. 150,000 subdivisions, called subclassifications/subclasses. Provided in published patent application number sequence with the current U.S. original classification/subclassification and any cross-reference classification/subclassifications with the format of ASCII text.",
      "productTitle": "MCF patent application (patent application sequence)",
      "productFrequency": null,
      "productLevel": "PRODUCT",
      "productFromDate": "2018-05-18",
      "productToDate": "2021-03-22",
      "numberOfFiles": 6,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7868878",
              "fileIdentifier": 7868878,
              "fileName": "mcfappl.zip",
              "fileSize": 37357184,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/classification/mcfappl.zip",
              "fileFromTime": "2021-03-22",
              "fileToTime": "2021-03-22",
              "fileType": "Data",
              "fileReleaseDate": "2021-03-22"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/CPCMCPT",
      "productIdentifier": 14804,
      "productShortName": "CPCMCPT",
      "productDesc": "Contains Cooperative Patent Classification (CPC) classification information for all Utility patent grants issued by the U.S. Patent and Trademark Office (USPTO) from 1790 to present. It is available as XML with schemas or text monthly (usually by the 15th of the month).",
      "productTitle": "CPC MCF for U.S. patent grants",
      "productFrequency": null,
      "productLevel": "PRODUCT",
      "productFromDate": "2018-07-26",
      "productToDate": "2023-12-01",
      "numberOfFiles": 3,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7899921",
              "fileIdentifier": 7899921,
              "fileName": "US_Grant_CPC_MCF_XML_2023-12-01.zip",
              "fileSize": 676579131,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/classification/cpc/US_Grant_CPC_MCF_XML_2023-12-01.zip",
              "fileFromTime": "2023-12-01",
              "fileToTime": "2023-12-01",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-01"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/CPCMCAPP",
      "productIdentifier": 14805,
      "productShortName": "CPCMCAPP",
      "productDesc": "Contains Cooperative Patent Classification (CPC) classification information for all Utility patent applications published by the U.S. Patent and Trademark Office (USPTO) from March 15, 2001 to present. It is available as XML with schemas or text monthly (usually by the 15th of the month).",
      "productTitle": "CPC MCF for U.S. patent applications",
      "productFrequency": null,
      "productLevel": "PRODUCT",
      "productFromDate": "2018-07-26",
      "productToDate": "2023-12-01",
      "numberOfFiles": 3,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7899922",
              "fileIdentifier": 7899922,
              "fileName": "US_PGPub_CPC_MCF_XML_2023-12-01.zip",
              "fileSize": 605594446,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/classification/cpc/US_PGPub_CPC_MCF_XML_2023-12-01.zip",
              "fileFromTime": "2023-12-01",
              "fileToTime": "2023-12-01",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-01"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PASDL",
      "productIdentifier": 14808,
      "productShortName": "PASDL",
      "productDesc": "Contains daily (front file) patent assignment text (no drawings/images) for CY2023 derived from patent assignment recordations made at the USPTO. The file format is eXtensible Markup Language (XML) in accordance with the Patent Assignment Daily XML (PADX) Version 0.3 Document Type Definition (DTD).",
      "productTitle": "Patent assignment daily XML (front file)",
      "productFrequency": "DAILY",
      "productLevel": "PRODUCT",
      "productFromDate": "2014-09-30",
      "productToDate": "2023-12-20",
      "numberOfFiles": 355,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900025",
              "fileIdentifier": 7900025,
              "fileName": "ad20231220.zip",
              "fileSize": 68455,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/assignment/ad20231220.zip",
              "fileFromTime": "2023-12-20",
              "fileToTime": "2023-12-20",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-20"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PASYR",
      "productIdentifier": 14809,
      "productShortName": "PASYR",
      "productDesc": "Contains (backfile - August 1980 - 2022) patent assignment text (no drawings/images) derived from patent assignment recordations made at the USPTO. The file format is eXtensible Markup Language (XML) in accordance with the Patent Assignment Daily XML (PADX) Version 0.3 Document Type Definition (DTD).",
      "productTitle": "Patent assignment annual XML (backfile)",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1980-08-01",
      "productToDate": "2022-12-31",
      "numberOfFiles": 21,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7868892",
              "fileIdentifier": 7868892,
              "fileName": "ad19800801-20221231-08.zip",
              "fileSize": 110787065,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/assignment/ad19800801-20221231-08.zip",
              "fileFromTime": "1980-08-01",
              "fileToTime": "2022-12-31",
              "fileType": "Data",
              "fileReleaseDate": "1980-08-01"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/ECORSEXC",
      "productIdentifier": 14812,
      "productShortName": "ECORSEXC",
      "productDesc": "Contains detailed information on roughly 9.6 million patent assignments and other transactions recorded at the USPTO since 1970 and involving roughly 16.5 million patents and patent applications. For more information:  http://www.uspto.gov/learning-and-resources/electronic-data-products/data",
      "productTitle": "Patent assignment economics data (stata (.dta) and MS excel (.csv))",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-08-05",
      "productToDate": "2023-09-19",
      "numberOfFiles": 112,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7869161",
              "fileIdentifier": 7869161,
              "fileName": "assignor.csv.zip",
              "fileSize": 285461660,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/assignment/economics/2022/assignor.csv.zip",
              "fileFromTime": "2023-09-19",
              "fileToTime": "2023-09-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-09-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTGRDT",
      "productIdentifier": 14816,
      "productShortName": "PTGRDT",
      "productDesc": "Contains (JAN 2002 - present) the full text, images/drawings, and complex work units (tables, mathematical expressions, chemical structures, and genetic sequence data) of each patent grant (excludes reexaminations) issued weekly (Tuesdays). The file format is extensible Markup Language (XML) in accordance with the Patent Grant Version 4.5 International Common Element (ICE) Document Type Definition (DTD). ",
      "productTitle": "Patent grant data/XML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2002-01-01",
      "productToDate": "2023-12-19",
      "numberOfFiles": 1490,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900003",
              "fileIdentifier": 7900003,
              "fileName": "I20231219.tar",
              "fileSize": 3197798400,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/2023/I20231219.tar",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTGRDSGM",
      "productIdentifier": 14817,
      "productShortName": "PTGRDSGM",
      "productDesc": "Contains the full text, images/drawings, and complex work units (tables, mathematical expressions, chemical structures, and genetic sequence data) of each patent grant (excludes reexaminations) issued weekly (Tuesdays) in CY2001. The file format is Standard Generalized Markup Language (SGML) in accordance with the U.S. Patent Grant Version 2.4 Document Type Definition (DTD). ",
      "productTitle": "Patent grant data/SGML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-01-02",
      "productToDate": "2001-12-25",
      "numberOfFiles": 53,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7871463",
              "fileIdentifier": 7871463,
              "fileName": "20011225.ZIP",
              "fileSize": 615388458,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/2001/20011225.ZIP",
              "fileFromTime": "2001-12-25",
              "fileToTime": "2001-12-25",
              "fileType": "Data",
              "fileReleaseDate": "2001-12-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTBLXML",
      "productIdentifier": 14819,
      "productShortName": "PTBLXML",
      "productDesc": "Contains (JAN 2002 - present) the bibliographic text (front page) of each patent grant issued weekly (Tuesdays) (excludes images/drawings and reexaminations). The file format is eXtensible Markup Language (XML) in accordance with the Patent Grant International Common Element (ICE) Document Type Definition (DTD).",
      "productTitle": "Patent grant bibliographic data/XML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2002-01-01",
      "productToDate": "2023-12-19",
      "numberOfFiles": 1200,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900004",
              "fileIdentifier": 7900004,
              "fileName": "ipgb20231219_wk51.zip",
              "fileSize": 15325079,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/bibliographic/2023/ipgb20231219_wk51.zip",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTBLAPS",
      "productIdentifier": 14820,
      "productShortName": "PTBLAPS",
      "productDesc": "Contains (JAN 1976 - DEC 2001) the bibliographic text (front page) of each patent grant issued weekly (Tuesdays) (excludes images/drawings and reexaminations). The file format is a subset of the Green Book, ASCII text.",
      "productTitle": "Patent grant bibliographic data/APS",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1976-01-01",
      "productToDate": "2001-12-31",
      "numberOfFiles": 253,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7869929",
              "fileIdentifier": 7869929,
              "fileName": "2001_sgm.zip",
              "fileSize": 213561492,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/bibliographic/2001/2001_sgm.zip",
              "fileFromTime": "2001-01-01",
              "fileToTime": "2001-12-31",
              "fileType": "Data",
              "fileReleaseDate": "2001-01-01"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTBLSGM",
      "productIdentifier": 14821,
      "productShortName": "PTBLSGM",
      "productDesc": "Contains (JAN 2001 - DEC 2001) the bibliographic text (front page) of each patent grant issued weekly (Tuesdays) in CY2001 (excludes images/drawings and reexaminations). The file format is Standard Generalized Markup Language (SGML) in accordance with the U.S. Patent Grant Version 2.4 Document Type Definition (DTD).",
      "productTitle": "Patent grant bibliographic data/SGML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-01-02",
      "productToDate": "2001-12-25",
      "numberOfFiles": 52,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7869958",
              "fileIdentifier": 7869958,
              "fileName": "pgb20011225_wk52.zip",
              "fileSize": 2425191,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/bibliographic/2001/pgb20011225_wk52.zip",
              "fileFromTime": "2001-12-25",
              "fileToTime": "2001-12-25",
              "fileType": "Data",
              "fileReleaseDate": "2001-12-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTGRXML",
      "productIdentifier": 14823,
      "productShortName": "PTGRXML",
      "productDesc": "Contains (JAN 2002 - present) the full text of each patent grant issued weekly (Tuesdays) (excludes images/drawings and reexaminations). The file format is eXtensible Markup Language (XML) in accordance with the Patent Grant International Common Element (ICE) Document Type Definition (DTD).",
      "productTitle": "Patent grant full text data/XML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2002-01-01",
      "productToDate": "2023-12-19",
      "numberOfFiles": 1172,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900002",
              "fileIdentifier": 7900002,
              "fileName": "ipg231219.zip",
              "fileSize": 125400841,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/fulltext/2023/ipg231219.zip",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTGRAPS",
      "productIdentifier": 14824,
      "productShortName": "PTGRAPS",
      "productDesc": "Contains (JAN 1976 - DEC 2001) the full text of each patent grant issued weekly (Tuesdays) (excludes images/drawings and reexaminations). The file format is Green Book, ASCII text and includes tables and \"in-line\" mathematical equations. ",
      "productTitle": "Patent grant full text data/APS",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1976-01-06",
      "productToDate": "2008-09-05",
      "numberOfFiles": 1382,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7872147",
              "fileIdentifier": 7872147,
              "fileName": "PatentFullTextAPSDoc_GreenBook.pdf",
              "fileSize": 51689842,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/fulltext/1995/PatentFullTextAPSDoc_GreenBook.pdf",
              "fileFromTime": "2008-09-05",
              "fileToTime": "2008-09-05",
              "fileType": "Document",
              "fileReleaseDate": "2008-09-05"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTGRSGM",
      "productIdentifier": 14825,
      "productShortName": "PTGRSGM",
      "productDesc": "Contains (JAN 2001 - DEC 2001) the full text of each patent grant issued weekly (Tuesdays) in CY2001 (excludes images/drawings and reexaminations). The file format is Standard Generalized Markup Language (SGML) in accordance with the U.S. Patent Grant Version 2.4 Document Type Definition (DTD).",
      "productTitle": "Patent grant full text data/SGML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-01-02",
      "productToDate": "2001-12-25",
      "numberOfFiles": 52,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7873003",
              "fileIdentifier": 7873003,
              "fileName": "pg011225.zip",
              "fileSize": 29426406,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/redbook/fulltext/2001/pg011225.zip",
              "fileFromTime": "2001-12-25",
              "fileToTime": "2001-12-25",
              "fileType": "Data",
              "fileReleaseDate": "2001-12-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTGRMP2",
      "productIdentifier": 14827,
      "productShortName": "PTGRMP2",
      "productDesc": "Contains the images of each patent grant issued weekly (Tuesdays) from July 31, 1790 to present in Portable Document Format (PDF) created from the Patent Grant Single-Page TIFF Images. Also included are older grants that have new Certificates-of-Correction (C-of-C) and rescanned images of older patent grants. Each weekly file contains approx. 6,000 patent grants. Approx. 9 GB (compressed) per week.",
      "productTitle": "Patent grant multi-page PDF images",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1790-07-31",
      "productToDate": "2023-12-19",
      "numberOfFiles": 1614,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900017",
              "fileIdentifier": 7900017,
              "fileName": "grant_pdf_20231219.tar",
              "fileSize": 11256944640,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/multipagepdf/2023/grant_pdf_20231219.tar",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/SPTIFF",
      "productIdentifier": 14828,
      "productShortName": "SPTIFF",
      "productDesc": "Contains the images of each patent grant issued weekly (Tuesdays) from July 31, 1790 to present in Tagged Image File Format (TIFF) Revision 6.0 with CCITT Group 4 Compression (single-page TIFFs). Includes a separate weekly Certificates-of-Correction (C-of-C) file and a daily Certificates file.",
      "productTitle": "Patent grant single-page TIFF images",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "0790-07-30",
      "productToDate": "2023-12-19",
      "numberOfFiles": 1233,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900013",
              "fileIdentifier": 7900013,
              "fileName": "grant_yb2_20231219.tar",
              "fileSize": 11404427776,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/2023/grant_yb2_20231219.tar",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTADJ",
      "productIdentifier": 14829,
      "productShortName": "PTADJ",
      "productDesc": "The Patent Term Adjustment (PTA) statute at issue is 35 USC 154(b)(2)(c), which provides for a deduction from any PTA award \"equal to the period of time during which the applicant failed to engage in reasonable efforts to conclude prosecution of the application.\" The statute also expressly delegates to the USPTO the authority to \"prescribe regulations establishing the circumstances that constitute a failure of an applicant to engage in reasonable efforts to conclude processing or examination of an application.\"",
      "productTitle": "Patent term adjustments",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2010-09-07",
      "productToDate": "2018-09-25",
      "numberOfFiles": 28,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7876744",
              "fileIdentifier": 7876744,
              "fileName": "cofc_yb2_20180925_pta.tar",
              "fileSize": 7755776,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/patenttermadjust/cofc_yb2_20180925_pta.tar",
              "fileFromTime": "2018-09-25",
              "fileToTime": "2018-09-25",
              "fileType": "Data",
              "fileReleaseDate": "2018-09-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/REPLACM",
      "productIdentifier": 14830,
      "productShortName": "REPLACM",
      "productDesc": "These documents replace the original data disseminated by the Electronic Information Products Division (EIPD). For more information on the data, contact ipd@uspto.gov (link sends e-mail).",
      "productTitle": "Replacement images",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "1795-05-25",
      "productToDate": "2020-03-17",
      "numberOfFiles": 99,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7877339",
              "fileIdentifier": 7877339,
              "fileName": "grant_yb2_20200317_r1.tar",
              "fileSize": 13846387712,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/replacementimages/2020/grant_yb2_20200317_r1.tar",
              "fileFromTime": "2020-03-17",
              "fileToTime": "2020-03-17",
              "fileType": "Data",
              "fileReleaseDate": "2020-03-17"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/COFC",
      "productIdentifier": 14831,
      "productShortName": "COFC",
      "productDesc": "Certificates-of-Correction (C-of-C) File (2010 - present) contains a listing of all Certificates of Correction for US patent documents and lists the following fields: Document Number; Publication Date; and Kind of Document Code (always \"X6\"). Layout information for the Certificates of Correction File is provided and additional information regarding Certificates of Correction can be found on the list at the following location https://www.uspto.gov/patents-getting-started/general-information-concerning-patents#heading-26",
      "productTitle": "Certificates of Correction",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2010-01-05",
      "productToDate": "2023-12-19",
      "numberOfFiles": 729,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900012",
              "fileIdentifier": 7900012,
              "fileName": "cofc_yb2_20231219.tar",
              "fileSize": 43416064,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/cofc/2023/cofc_yb2_20231219.tar",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/REEXAM",
      "productIdentifier": 14832,
      "productShortName": "REEXAM",
      "productDesc": "These historical statistics are data for requests for reexamination filed since 7/1/1981 (for ex parte) or since 11/29/1999 (for inter partes). They are updated weekly.",
      "productTitle": "Reexaminations",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2011-10-04",
      "productToDate": "2012-09-25",
      "numberOfFiles": 52,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7878188",
              "fileIdentifier": 7878188,
              "fileName": "grant_yb2_20120925_rx.tar",
              "fileSize": 1812480,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/reexaminations/grant_yb2_20120925_rx.tar",
              "fileFromTime": "2012-09-25",
              "fileToTime": "2012-09-25",
              "fileType": "Data",
              "fileReleaseDate": "2012-09-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/CERTS",
      "productIdentifier": 14833,
      "productShortName": "CERTS",
      "productDesc": "Certificates include post issuance documents, e.g., ex parte and inter partes reexamination documents. These were weekly and are daily starting on Ocotober of 2012.",
      "productTitle": "Certificates",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2011-10-04",
      "productToDate": "2023-12-19",
      "numberOfFiles": 2145,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900009",
              "fileIdentifier": 7900009,
              "fileName": "grant_yb2_20231219_cert.tar",
              "fileSize": 76288,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/certificates/2023/grant_yb2_20231219_cert.tar",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/RESCANS",
      "productIdentifier": 14834,
      "productShortName": "RESCANS",
      "productDesc": "Bnnnnn.tar: Rescans of miscellaneous documents from miscellaneous years (1790 - present). The filename relates to the Digital Linear Tape (DLT) cartridge.",
      "productTitle": "Rescans",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2014-05-09",
      "productToDate": "2023-12-19",
      "numberOfFiles": 464,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900011",
              "fileIdentifier": 7900011,
              "fileName": "B34826.tar",
              "fileSize": 245760,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/grant/yellowbook/rescans/B34826.tar",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTLITIG",
      "productIdentifier": 14835,
      "productShortName": "PTLITIG",
      "productDesc": "Contains detailed U.S. District Courts patent litigation data on 74,623 unique court cases filed during the period 1963 - 2016. The data was collected from the Public Access to Court Electronic Records (PACER) and RECAP as sources for all of the content. The final output datasets, provided in five different files, include information on the litigating parties involved and their attorneys; the cause of action; the court location; important dates in the litigation history; and, covering over 5 million document level information from the docket reports, descriptions of all documents submitted in a given case.",
      "productTitle": "Patent Litigation data (stata (.dta) and MS Excel (.csv))",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2016-12-29",
      "productToDate": "2019-12-19",
      "numberOfFiles": 26,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7881267",
              "fileIdentifier": 7881267,
              "fileName": "csv.zip",
              "fileSize": 367263828,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/litigation/2016/csv.zip",
              "fileFromTime": "2019-12-19",
              "fileToTime": "2019-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2019-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/APPDT",
      "productIdentifier": 14838,
      "productShortName": "APPDT",
      "productDesc": "Contains (MAR 15, 2001 - present) the full text, images/drawings, and complex work units (tables, mathematical expressions, chemical structures, and genetic sequence data) of each patent application (non-provisional utility and plant) published weekly (Thursdays). The file format is eXtensible Markup Language (XML) in accordance with the Patent Application Version 4.4 International Common Element (ICE) Document Type Definition (DTD).",
      "productTitle": "Patent application data/XML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-03-15",
      "productToDate": "2023-12-21",
      "numberOfFiles": 1790,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900032",
              "fileIdentifier": 7900032,
              "fileName": "I20231221.tar",
              "fileSize": 5334020608,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/application/redbook/2023/I20231221.tar",
              "fileFromTime": "2023-12-21",
              "fileToTime": "2023-12-21",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-21"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/APPBLXML",
      "productIdentifier": 14840,
      "productShortName": "APPBLXML",
      "productDesc": "Contains (MAR 15, 2001 - present) the bibliographic text (front page) of each patent application (non-provisional utility and plant) published weekly (Thursdays) (excludes images/drawings). The file format is eXtensible Markup Language (XML) in accordance with the Patent Application Version 4.4 International Common Element (ICE) Document Type Definition (DTD).",
      "productTitle": "Patent application bibliographic data/XML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-03-15",
      "productToDate": "2023-12-21",
      "numberOfFiles": 1223,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900033",
              "fileIdentifier": 7900033,
              "fileName": "ipab20231221_wk51.zip",
              "fileSize": 5523753,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/application/redbook/bibliographic/2023/ipab20231221_wk51.zip",
              "fileFromTime": "2023-12-21",
              "fileToTime": "2023-12-21",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-21"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/APPXML",
      "productIdentifier": 14842,
      "productShortName": "APPXML",
      "productDesc": "Contains (MAR 15, 2001 - present) the full text of each patent application (non-provisional utility and plant) published weekly (Thursdays) (excludes images/drawings). The file format is eXtensible Markup Language (XML) in accordance with the Patent Application Version 4.4 International Common Element (ICE) Document Type Definition (DTD).",
      "productTitle": "Patent application full text data/XML",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-03-15",
      "productToDate": "2023-12-21",
      "numberOfFiles": 1225,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900031",
              "fileIdentifier": 7900031,
              "fileName": "ipa231221.zip",
              "fileSize": 199523586,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/application/redbook/fulltext/2023/ipa231221.zip",
              "fileFromTime": "2023-12-21",
              "fileToTime": "2023-12-21",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-21"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/APPMP2",
      "productIdentifier": 14844,
      "productShortName": "APPMP2",
      "productDesc": "Contains the images of each patent application (non-provisional utility and plant) published weekly (Thursdays) from March 15, 2001 to present in Portable Document Format (PDF) created from the Patent Application Single-Page TIFF Images. Each weekly file contains approx. 6,000 patent applications. Approx. 11 GB (compressed) per week.",
      "productTitle": "Patent application multi-page PDF images",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-03-15",
      "productToDate": "2023-12-21",
      "numberOfFiles": 1091,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900035",
              "fileIdentifier": 7900035,
              "fileName": "app_pdf_20231221.tar",
              "fileSize": 19565178880,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/application/multipagepdf/2023/app_pdf_20231221.tar",
              "fileFromTime": "2023-12-21",
              "fileToTime": "2023-12-21",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-21"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/APPSP2",
      "productIdentifier": 14846,
      "productShortName": "APPSP2",
      "productDesc": "Contains the images of each patent application (non-provisional utility and plant) published weekly (Thursdays) from March 15, 2001 to present in Tagged Image File Format (TIFF) Revision 6.0 with CCITT Group 4 Compression (single-page TIFFs). Each weekly file contains approximately 6,000 published patent applications.",
      "productTitle": "Patent application single-page TIFF images",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2001-03-15",
      "productToDate": "2023-12-21",
      "numberOfFiles": 1102,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900034",
              "fileIdentifier": 7900034,
              "fileName": "app_yb2_20231221.tar",
              "fileSize": 19737997824,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/application/yellowbook/2023/app_yb2_20231221.tar",
              "fileFromTime": "2023-12-21",
              "fileToTime": "2023-12-21",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-21"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/HISTEXC",
      "productIdentifier": 14849,
      "productShortName": "HISTEXC",
      "productDesc": "Contains four research datasets containing time series and micro-level data by National Bureau of Economic Research (NBER) technology sub-category on applications, grants, and in-force patents spanning two centuries of innovation. For more information:  https://www.uspto.gov/learning-and-resources/ip-policy/economic-research/research-datasets",
      "productTitle": "Historical patent data files (stata (.dta) and MS excel (.csv))",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-06-25",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887690",
              "fileIdentifier": 7887690,
              "fileName": "annual.dta",
              "fileSize": 107665,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/annual.dta",
              "fileFromTime": "2015-06-25",
              "fileToTime": "2015-06-25",
              "fileType": "Data",
              "fileReleaseDate": "2015-06-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/HISTMST",
      "productIdentifier": 14851,
      "productShortName": "HISTMST",
      "productDesc": "The historical_masterfile contains micro-level application, NBER sub-category, and prosecution data on 2.2 million patent applications filed from 1981 to 2015 and 8.9 million patents issued through 2014.",
      "productTitle": "Historical masterfile",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-07-02",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887692",
              "fileIdentifier": 7887692,
              "fileName": "historical_masterfile.zip",
              "fileSize": 239490148,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/historical_masterfile.zip",
              "fileFromTime": "2015-07-02",
              "fileToTime": "2015-07-02",
              "fileType": "Data",
              "fileReleaseDate": "2015-07-02"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/OUTMN",
      "productIdentifier": 14852,
      "productShortName": "OUTMN",
      "productDesc": "The monthly file contains a monthly count of applications, issued patents, and in-force patents by application status, disposal type (abandoned, issued, or pending), and NBER sub-category from 1981 to 2015.",
      "productTitle": "Monthly",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-06-25",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887693",
              "fileIdentifier": 7887693,
              "fileName": "monthly.dta",
              "fileSize": 286561,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/monthly.dta",
              "fileFromTime": "2015-06-25",
              "fileToTime": "2015-06-25",
              "fileType": "Data",
              "fileReleaseDate": "2015-06-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/OUTMND",
      "productIdentifier": 14853,
      "productShortName": "OUTMND",
      "productDesc": "The monthly_disposal dataset contains counts of application by disposal type for each monthly application cohort by NBER sub-category from 1981 to 2015.",
      "productTitle": "Monthly disposal",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-06-25",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887698",
              "fileIdentifier": 7887698,
              "fileName": "monthly_disposal.csv",
              "fileSize": 39489504,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/monthly_disposal.csv",
              "fileFromTime": "2015-06-25",
              "fileToTime": "2015-06-25",
              "fileType": "Data",
              "fileReleaseDate": "2015-06-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/ORDERS",
      "productIdentifier": 14855,
      "productShortName": "ORDERS",
      "productDesc": "This is one of three Orders intermediate files used to generate the four datasets are also available for download.",
      "productTitle": "Orders",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-06-25",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887689",
              "fileIdentifier": 7887689,
              "fileName": "orders.dta",
              "fileSize": 50972,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/orders.dta",
              "fileFromTime": "2015-06-25",
              "fileToTime": "2015-06-25",
              "fileType": "Data",
              "fileReleaseDate": "2015-06-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/ORDCLS",
      "productIdentifier": 14856,
      "productShortName": "ORDCLS",
      "productDesc": "This is one of three Orders intermediate files used to generate the four datasets are also available for download.",
      "productTitle": "Orders class",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-07-02",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887694",
              "fileIdentifier": 7887694,
              "fileName": "orders_class.zip",
              "fileSize": 16395045,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/orders_class.zip",
              "fileFromTime": "2015-07-02",
              "fileToTime": "2015-07-02",
              "fileType": "Data",
              "fileReleaseDate": "2015-07-02"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/ORDSBCL",
      "productIdentifier": 14857,
      "productShortName": "ORDSBCL",
      "productDesc": "This is one of three Orders intermediate files used to generate the four datasets are also available for download.",
      "productTitle": "Orders sub-class",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-06-25",
      "productToDate": "2015-06-25",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887701",
              "fileIdentifier": 7887701,
              "fileName": "orders_subclass.csv",
              "fileSize": 5602147,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/historical/2014/orders_subclass.csv",
              "fileFromTime": "2015-06-25",
              "fileToTime": "2015-06-25",
              "fileType": "Data",
              "fileReleaseDate": "2015-06-25"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/ECOPAIR",
      "productIdentifier": 14858,
      "productShortName": "ECOPAIR",
      "productDesc": "Contains detailed information on more than 12.5 million publicly viewable patent applications filed with the USPTO along with more than 1 million PCT applications through June 2022. The data files include information on each application's characteristics, prosecution history, continuation history, claims of foreign priority, patent term adjustment history, publication history, and correspondence address information.",
      "productTitle": "Patent examination research dataset (stata (.dta) and MS excel (.csv))",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2015-12-02",
      "productToDate": "2023-09-26",
      "numberOfFiles": 206,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7887908",
              "fileIdentifier": 7887908,
              "fileName": "foreign_priority.dta.zip",
              "fileSize": 83242896,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/pair/economics/2022/foreign_priority.dta.zip",
              "fileFromTime": "2023-09-26",
              "fileToTime": "2023-09-26",
              "fileType": "Data",
              "fileReleaseDate": "2023-09-26"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/GZLST",
      "productIdentifier": 14861,
      "productShortName": "GZLST",
      "productDesc": "Published each Tuesday, the Patent Official Gazette contains bibliographic (front page) information, a representative claim, and a drawing (if applicable) of each patent grant issued that week. Includes U.S. Patent and Trademark Office (USPTO) Notices which provide important information and changes in rules concerning both patents and trademarks.",
      "productTitle": "Patent official gazettes listing",
      "productFrequency": "WEEKLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2002-07-02",
      "productToDate": "2023-12-19",
      "numberOfFiles": 1122,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900015",
              "fileIdentifier": 7900015,
              "fileName": "e-OG20231219_1517-3.zip",
              "fileSize": 206766866,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/officialgazette/2023/e-OG20231219_1517-3.zip",
              "fileFromTime": "2023-12-19",
              "fileToTime": "2023-12-19",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/PTAPPCLM",
      "productIdentifier": 14862,
      "productShortName": "PTAPPCLM",
      "productDesc": "Contains detailed information on claims from U.S. patents granted between January 1976 and December 2014 and U.S. patent applications published between March 15, 2001 and December 2014. The dataset is derived from the Patent Grant Full Text and Patent Application Full Text bulk data files. The Office of Chief Economist (OCE) applied a Python algorithm to identify individual claims as well as the dependency relationship between claims. From the parsed claims text, OCE created six data files containing individually-parsed claims, claim-level statistics, and document-level statistics, including newly-developed measures of patent scope.",
      "productTitle": "Patent and patent application Claims data (Stata (.dta) and MS Excel (.csv))",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2016-10-07",
      "productToDate": "2016-10-11",
      "numberOfFiles": 14,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7889246",
              "fileIdentifier": 7889246,
              "fileName": "csv.zip",
              "fileSize": 10012541184,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/claims/economics/2014/csv.zip",
              "fileFromTime": "2016-10-11",
              "fileToTime": "2016-10-11",
              "fileType": "Data",
              "fileReleaseDate": "2016-10-11"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/ECOPATAI",
      "productIdentifier": 14863,
      "productShortName": "ECOPATAI",
      "productDesc": "Contains Artificial Intelligence Patent Landscape data classifying 13,244,037 granted patents and PGPubs published from 1976 through 2020 in eight AI component technologies using state-of-the art machine learning based models.",
      "productTitle": "The Artificial Intelligence Patent Dataset (Stata (.dta) and MS Excel (.tsv))",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2021-07-30",
      "productToDate": "2021-07-30",
      "numberOfFiles": 6,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7889260",
              "fileIdentifier": 7889260,
              "fileName": "ai_model_predictions.tsv.zip",
              "fileSize": 1092504281,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/ai/landscape/economics/2020/ai_model_predictions.tsv.zip",
              "fileFromTime": "2021-07-30",
              "fileToTime": "2021-07-30",
              "fileType": "Data",
              "fileReleaseDate": "2021-07-30"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/MOONSHOT",
      "productIdentifier": 14864,
      "productShortName": "MOONSHOT",
      "productDesc": "This curated dataset consists of 269,353 patent documents (published patent applications and granted patents) spanning the 1976 to 2016 period and is intended to help identify promising R&D on the horizon in diagnostics, therapeutics, data analytics, and model biological systems.",
      "productTitle": "Cancer Moonshot data (MS excel (.csv))",
      "productFrequency": "NUMERICAL",
      "productLevel": "PRODUCT",
      "productFromDate": "2016-08-17",
      "productToDate": "2016-08-19",
      "numberOfFiles": 2,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7889267",
              "fileIdentifier": 7889267,
              "fileName": "Cancer Data12A.zip",
              "fileSize": 19715235,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/patent/cancer/moonshot/2016/Cancer Data12A.zip",
              "fileFromTime": "2016-08-19",
              "fileToTime": "2016-08-19",
              "fileType": "Data",
              "fileReleaseDate": "2016-08-19"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TRASECO",
      "productIdentifier": 14870,
      "productShortName": "TRASECO",
      "productDesc": "Contains detailed information on 1.19 million assignments and other transactions recorded at the USPTO between 1952 and 2022 and involving 2.16 million unique trademark properties. For more information:  https://www.uspto.gov/learning-and-resources/ip-policy/economic-research/research-datasets",
      "productTitle": "Trademark assignment economics data (stata (.dta) and MS excel (.csv))",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2014-04-18",
      "productToDate": "2023-06-22",
      "numberOfFiles": 160,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7889427",
              "fileIdentifier": 7889427,
              "fileName": "tm_subparty.csv.zip",
              "fileSize": 61699,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/assignment/economics/2022/tm_subparty.csv.zip",
              "fileFromTime": "2023-06-22",
              "fileToTime": "2023-06-22",
              "fileType": "Data",
              "fileReleaseDate": "2023-06-22"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TRTDXFAP",
      "productIdentifier": 14873,
      "productShortName": "TRTDXFAP",
      "productDesc": "Trademark Applications:  Pending and registered trademark text data (no images) to include word mark, serial number, registration number, filing date, registration date, goods and services, classification number(s), status code(s), design search code(s), pseudo mark(s) in CY2022. The file format is eXtensible Markup Language (XML) in accordance with the U.S. Trademark Assignments Version 2.0 Document Type Definition (DTD).",
      "productTitle": "Trademark daily XML file (TDXF) applications",
      "productFrequency": "DAILY",
      "productLevel": "PRODUCT",
      "productFromDate": "2023-01-01",
      "productToDate": "2023-12-20",
      "numberOfFiles": 357,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900030",
              "fileIdentifier": 7900030,
              "fileName": "apc231220.zip",
              "fileSize": 35929579,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/dailyxml/applications/apc231220.zip",
              "fileFromTime": "2023-12-20",
              "fileToTime": "2023-12-20",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-20"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TRTYRAP",
      "productIdentifier": 14874,
      "productShortName": "TRTYRAP",
      "productDesc": "Contains (backfile) pending and registered trademark text data (no images) to include word mark, serial number, registration number, filing date, registration date, goods and services, classification number(s), status code(s), design search code(s), pseudo mark(s) from (APR 1884 - DEC 2022). The file format is eXtensible Markup Language (XML) in accordance with the U.S. Trademark Applications Version 2.0 Document Type Definition (DTD).",
      "productTitle": "Trademark annual XML applications",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1884-04-07",
      "productToDate": "2022-12-31",
      "numberOfFiles": 78,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7889431",
              "fileIdentifier": 7889431,
              "fileName": "apc18840407-20221231-15.zip",
              "fileSize": 89160441,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/dailyxml/applications/apc18840407-20221231-15.zip",
              "fileFromTime": "1884-04-07",
              "fileToTime": "2022-12-31",
              "fileType": "Data",
              "fileReleaseDate": "1884-04-07"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TTABTDXF",
      "productIdentifier": 14877,
      "productShortName": "TTABTDXF",
      "productDesc": "Trademark Trial and Appeal Board (TTAB):  TTAB text data (no images) in CY2023. The file format is eXtensible Markup Language (XML) in accordance with the U.S. Trademark Trial and Appeal Board Version 1.0 Document Type Definition (DTD).",
      "productTitle": "Trademark daily XML file (TDXF) trademark trial and appeal board (TTAB)",
      "productFrequency": "DAILY",
      "productLevel": "PRODUCT",
      "productFromDate": "2021-09-08",
      "productToDate": "2023-12-20",
      "numberOfFiles": 355,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900029",
              "fileIdentifier": 7900029,
              "fileName": "tt231220.zip",
              "fileSize": 267352,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/dailyxml/ttab/tt231220.zip",
              "fileFromTime": "2023-12-20",
              "fileToTime": "2023-12-20",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-20"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TTABYR",
      "productIdentifier": 14878,
      "productShortName": "TTABYR",
      "productDesc": "Contains (backfile) Trademark Trial and Appeal Board text data (OCT 2, 1951 - DEC 31, 2022). The file format is eXtensible Markup Language (XML) in accordance with the U.S. Trademark Trial and Appeal Board Version 1.0 Document Type Definition (DTD).",
      "productTitle": "Trademark annual XML TTAB",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1951-10-02",
      "productToDate": "2022-12-31",
      "numberOfFiles": 1,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7890023",
              "fileIdentifier": 7890023,
              "fileName": "tt19511002-20221231-01.zip",
              "fileSize": 176634804,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/dailyxml/ttab/tt19511002-20221231-01.zip",
              "fileFromTime": "1951-10-02",
              "fileToTime": "2022-12-31",
              "fileType": "Data",
              "fileReleaseDate": "1951-10-02"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TRTDXFAG",
      "productIdentifier": 14881,
      "productShortName": "TRTDXFAG",
      "productDesc": "Trademark Assignments:  Assignment text data (no images) in CY2023. The file format is eXtensible Markup Language (XML) in accordance with the U.S. Trademark Assignments Version 0.4 Document Type Definition (DTD).",
      "productTitle": "Trademark daily XML file (TDXF) assignments",
      "productFrequency": "DAILY",
      "productLevel": "PRODUCT",
      "productFromDate": "2013-09-05",
      "productToDate": "2023-12-20",
      "numberOfFiles": 355,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900027",
              "fileIdentifier": 7900027,
              "fileName": "asb231220.zip",
              "fileSize": 52522,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/dailyxml/assignments/asb231220.zip",
              "fileFromTime": "2023-12-20",
              "fileToTime": "2023-12-20",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-20"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TRTYRAG",
      "productIdentifier": 14882,
      "productShortName": "TRTYRAG",
      "productDesc": "Contains (backfile) Trademark Assignment text data (JAN 3, 1955 - DEC 31, 2022). The file format is eXtensible Markup Language (XML) in accordance with the U.S. Trademark Assignments Version 0.4 Document Type Definition (DTD).",
      "productTitle": "Trademark annual XML assignments",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "1955-01-03",
      "productToDate": "2022-12-31",
      "numberOfFiles": 1,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7890185",
              "fileIdentifier": 7890185,
              "fileName": "asb19550103-20221231-01.zip",
              "fileSize": 241203331,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/dailyxml/assignments/asb19550103-20221231-01.zip",
              "fileFromTime": "1955-01-03",
              "fileToTime": "2022-12-31",
              "fileType": "Data",
              "fileReleaseDate": "1955-01-03"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TR24BOX",
      "productIdentifier": 14885,
      "productShortName": "TR24BOX",
      "productDesc": "The USPTO Trademark Daily Application Image 24 Hour Box (XML/TIFF/JPEG) consists of two datasets: (A)  24 Hour Box file, hryymmdd.zip & (B)  24 Hour Box Supplemental file, hrsyymmdda.zip, with optional files, hrsyymmddb.zip, hrsyymmddc.zip, etc. (A)  The 24 Hour Box zipfile contains images of daily Trademark applications in either JPG format (black and white, grayscale, or color) or TIFF format (black and white) processed through the Trademark Image Capture and Retrieval System (TICRS) and viewable using any standard image viewer. (B)  The 24 Hour Box Supplemental zipfile(s) contain Trademark cropped TIFF (black and white) or cropped JPG (color) image files from paper submissions of Trademark applications.",
      "productTitle": "Trademark 24 hour box and supplemental",
      "productFrequency": "DAILY",
      "productLevel": "PRODUCT",
      "productFromDate": "2005-08-10",
      "productToDate": "2023-12-20",
      "numberOfFiles": 8840,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7900028",
              "fileIdentifier": 7900028,
              "fileName": "hrs231220a.zip",
              "fileSize": 361018,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/application/images/2023/hrs231220a.zip",
              "fileFromTime": "2023-12-20",
              "fileToTime": "2023-12-20",
              "fileType": "Data",
              "fileReleaseDate": "2023-12-20"
          }
      ]
  },
  {
      "productLinkPath": "/BDSS-API/products/TRCFECO2",
      "productIdentifier": 14887,
      "productShortName": "TRCFECO2",
      "productDesc": "Contains detailed information on 11.6 million trademark applications filed with or registrations issued by the USPTO between 1870 and February 2022. For more information:  https://www.uspto.gov/learning-and-resources/ip-policy/economic-research/research-datasets",
      "productTitle": "Trademark case file economics data (stata (.dta) and MS excel (.csv))",
      "productFrequency": "YEARLY",
      "productLevel": "PRODUCT",
      "productFromDate": "2013-01-02",
      "productToDate": "2023-06-27",
      "numberOfFiles": 432,
      "parentProduct": null,
      "productFiles": [
          {
              "fileLinkPath": "/BDSS-API/productFiles/7899566",
              "fileIdentifier": 7899566,
              "fileName": "design_search.csv.zip",
              "fileSize": 25947258,
              "fileDownloadUrl": "https://bulkdata.uspto.gov/data/trademark/casefile/economics/2022/design_search.csv.zip",
              "fileFromTime": "2023-06-27",
              "fileToTime": "2023-06-27",
              "fileType": "Data",
              "fileReleaseDate": "2023-06-27"
          }
      ]
  }
]
@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrl: './patents.component.scss'
})
export class PatentsComponent implements OnInit  {
  displayedColumns: string[] = ['productShortName', 'productTitle', 'productLevel', 'productFromDate', 'productToDate'];
  dataSource: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getPatents().subscribe((data) => {
      this.dataSource = data;
    });
    // this.dataSource = patents;
  }

  logLink(patent: any) {
    console.log('/patents/' + patent.productShortName);
    // this.router.navigate(['/patents', patent.productShortName]);
  }
}
