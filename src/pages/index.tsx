import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import { Card, Body, Header, Input, Select, Button, Amount, Rate, Option } from "../styles/ExchangeRateCalculatorStyles";
import styles from "../styles/styles.module.css"

const inter = Inter({ subsets: ['latin'] })
const urlApi : string  = "https://api.apilayer.com/exchangerates_data" ;

export default function Home() {

  const [amount, setAmount] = useState<number>(0.00);
  const [fromCurrency,setFromCurrency] = useState("AED");
  const [toCurrency,setToCurrency] = useState("AFN");
  const [convertedAmount,setConvertedAmount] = useState("0.00")
  const [exchangeRate,setExchangeRate] = useState("---")
  const [currencies,SetCurrencies] = useState({   
    "AED": "United Arab Emirates Dirham", 
    "AFN": "Afghan Afghani", 
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));   
  }

  var myHeaders = new Headers();
  const API_KEY = process.env.API_KEY ? process.env.API_KEY : ""
  myHeaders.append("apikey", API_KEY );

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: undefined,
  };

  async function Convert() {
    let res = await fetch(`${urlApi}/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions )
    const data = await res.json();  
    setConvertedAmount(data.result); 
    setExchangeRate(data.info.rate)
  }

  useEffect(() => {
    console.log("useEffect called")
    async function CurrencesList() {
      let res = await fetch(`${urlApi}/symbols`, requestOptions )
      const data = await res.json();
      SetCurrencies(data.symbols)      
    }
    CurrencesList();

      //eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, []);



  return (
    <div className={styles.principalContainer}>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Exchange rate calculator</h1>
        </div>  

        <div className={styles.CardBx}>          
          <Card>
            <Header><h3>From:</h3></Header>
            <Body>
              <Select value={fromCurrency} onChange={(e: any) => setFromCurrency(e.target.value)}>                  
                {
                  Object.keys(currencies).map( (currency) => (
                    <Option key={currency} value={currency}>{currency}</Option>
                  ))
                }
              </Select>
              <Input type="number" value={amount} placeholder="0.00"onChange={(e: any) => {handleInputChange(e)}} />
            </Body>
          </Card>

          <Card>
            <Header><h3>To(estimate):</h3></Header>
            <Body>
              <Select value={toCurrency} onChange={(e : any) => setToCurrency(e.target.value)}>
                {
                  Object.keys(currencies).map( (currency) => (
                    <Option key={currency} value={currency}>{currency}</Option>
                  ))
                }
              </Select>
            <Amount> {convertedAmount}</Amount> 
            </Body>            
          </Card>

          <Rate>Exchange Rate: {exchangeRate}</Rate>
          <Button  onClick = {() => Convert()}>Convert</Button>
        </div>

      </div>
    </div>    
  )
}


