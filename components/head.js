import React from "react";
import { Head } from 'mdx-deck'

export default function HeadMeta() {
  return (<Head>
    <title>A Guide to Testing Kafka</title>

    <meta property="og:title" content="A Guide to Testing Kafka" />
    <meta property="og:description" content="Build better Kafka clients by testing more effectively." />
    <meta property="og:url" content="https://testing-kafka.schroedermatt.com" />
    <meta property="og:image" content="http://apache-kafka.org/images/apache-kafka.png" />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@msschroe3' />
    <meta name='twitter:title' content='A Guide to Testing Kafka' />
    <meta name='twitter:description' content='Build better Kafka clients by testing more effectively.' />
    <meta name='twitter:image' content='http://apache-kafka.org/images/apache-kafka.png' />
  </Head>)
}