import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCards'
import ActionCard from './components/ActionCards'
import ContactList from './components/ContactList'
import ColorScheme from './components/ColorScheme'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ColorScheme />
        <FlatCards />
        <ElevatedCards/>
        <FancyCard />
        <ContactList/>
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App