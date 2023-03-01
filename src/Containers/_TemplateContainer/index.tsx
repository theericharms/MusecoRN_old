import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, groupBy, map } from 'lodash'
import _TemplateContainerContainer from './_TemplateContainer'
import Logger from '@/Helpers/Logger'

const Index_TemplateContainer = ({ navigation }) => {
  const dispatch = useDispatch()

  const appContent = useSelector(
    (state) => state.content.appContentTable.framework,
  )
  const errors = useSelector((state) => state.content.appContentTable.framework)
  const fep = useSelector((state) => state.content.frontEndParameters)

  // useEffect(() => {}, [])[])

  const onPress = (route) => {
    Logger.log(route)
    // return navigation.navigate(route)
  }

  return (
    <_TemplateContainerContainer
      appContent={appContent}
      errors={errors}
      fep={fep}
    />
  )
}

export default Index_TemplateContainer
