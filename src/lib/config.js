// ANALYTICS CONFIG
export const analyticsId = "GTM-MBCBVQS";

export const analyticsProps = {
	"contentTitle": "Product title", // Insert the title of the product here
	"releaseDate": "YYYYMMDD",
	"contentType": "content-type", // Optional: eg. scrollytelling, exploratory, edutainment?
	"outputSeries": "url-slug-for-output-series" // Should match the slug for the release on CMS
};

// CORE CONFIG
export const themes = {
  'light': {
    'name': 'light',
    'text': '#222',
    'muted': '#777',
    'pale': '#f0f0f0',
    'background': '#fff'
  },
  'dark': {
    'name': 'dark',
    'text': '#fff',
    'muted': '#bbb',
    'pale': '#333',
    'background': '#222'
  },
  'lightblue': {
    'name': 'lightblue',
    'text': '#206095',
    'muted': '#707070',
    'pale': '#f0f0f0',
    'background': 'rgb(188, 207, 222)'
  }
}

// DEMO-SPECIFIC CONFIG

export const colors = {
  seq: ['rgb(234, 236, 177)', 'rgb(169, 216, 145)', 'rgb(0, 167, 186)', 'rgb(0, 78, 166)', 'rgb(0, 13, 84)'],
  cat: ['#206095', '#A8BD3A', '#003C57', '#27A0CC', '#118C7B', '#F66068', '#746CB1', '#22D0B6', 'lightgrey']
}

export const units = {
  'density': 'sq.km',
  'age_med': 'years'
}