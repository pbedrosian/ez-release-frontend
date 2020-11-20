import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  })

// Create Document Component
const ReleasePDF = (props) => (
    <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>Photo Release Form</Text>
      <Text style={styles.text}>
      I, {props.formData.clientFirstName} hereby grant and authorize _____________________ 
      the right to take, edit, alter, copy, exhibit, publish, distribute and 
      make use of any and all pictures or video taken of me to be used in and/or 
      for any lawful promotional materials including, but not limited to, 
      newsletters, flyers, posters, brochures, advertisements, fundraising letters, 
      annual reports, press kits and submissions to journalists, websites, social networking 
      sites and other print and digital communications, without payment or any other consideration. 
      </Text>
      <Text style={styles.text}>
      This authorization extends to all languages, media, formats 
      and markets now known or later discovered.
      </Text>
      <Text style={styles.text}>
      This authorization shall continue indefinitely, unless I otherwise 
      revoke this authorization in writing.
      </Text>
      <Text style={styles.text}>
      I waive the right to inspect or approve any finished product 
      in which my likeness appears, including written or electronic copy.
      </Text>
      <Text style={styles.text}>
      I agree that I have been compensated for this use of my likeness or 
      have otherwise agreed to this release without being compensated. I waive 
      any right to royalties or other compensation arising or related to the 
      use of the photograph. 
      </Text>
      <Text style={styles.text}>
      I understand and agree that these materials shall become the 
      property of _________________ and will not be returned..
      </Text>
      <Text style={styles.text}>
      I hereby hold harmless and release _______________________ from all liability, 
      petitions, and causes of action which I, my heirs, representative, executors, administrators, 
      or any other persons may make while acting on my behalf or on behalf of my estate.
      </Text>
      <Text style={styles.text}>
      Printed Name: _________________________________
      </Text>
      <Text style={styles.text}>
      Signature: ____________________________________	
      </Text>
      <Text style={styles.text}>
      Date: ___________________________
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

export default ReleasePDF