---
title: Is Pectra Upgrade of any use ?
description: Deep Dive into Pectra EIPs
date: 2025-01-26
navigation: true
cover: /pectra/babypanda.webp
tags:
    - blog
    - Blockchain
---


## Article [STILL IN PROGRESS]
# Is ETHEREUM new upgrade gonna double the ETH usage ??  


## TABLE OF CONTENT [Structure]
> - [ ] Introduction Pectra 
> - [ ] List of Important Eips
> - [ ] What is the impact on the network ?
> - [ ] What is Sygnum doing about it ?
> - [ ] How can you leverage this information ?

##TLDR [Write it at the end]
The new upgrade in Ethereum known as Pectra(Prague-Electra) upgrade is the biggest upgrade in Ethereum till date by the number of Ethereum Improvement Proposals (EIPs) included. But don't be excited you can not still run an ethereum node using your mobile. As the Verkle transition[^1] is still not included in Pectra. Verkle transition and PeerDAS will be included in the next upgrade called Fusaka (Fulu-Osaka). 

So, if you are wondering, what can you look forward in this upgrade:
- Ethereum 

## What is Pectra Upgrade ?
The latest softfork scheduled to take place in Ethereum Network is known as Pectra Upgrade. It can be also known as Prague/ Electra upgrade. It should actually called as Prague and Electra upgrade which means actually Electra upgrade on the Consensus Layer of Ethereum and  Prague upgrade on the Execution Layer. Pectra Upgrade is planned to be released in Q1 of 2025. 

> At the **time** of writing, Pectra is being tested in  [MEKONG](https://mekong.ethpandaops.io/)


<img src="https://images.ctfassets.net/h62aj7eo1csj/3BW1USeHMkotrTbJ3dX9NM/fea07b5d009ad53db41a512c6420818f/pectra_eips.JPG?w=1100&q=60&fm=avif">

List of the most important EIPS:
1. EIP7002 execution layer triggerable exits:
	- adds a new mechanism to allow validators to trigger withdrawals and exits from their execution layer (0x01) withdrawal credentials.
2. EIP7251 increase max effective balance
	- Increases the constant MAX_EFFECTIVE_BALANCE, while keeping the minimum staking balance 32 ETH. This permits large node operators to consolidate into fewer validators while also allowing solo-stakers to earn compounding rewards and stake in more flexible increments.
3. EIP7702 will allow Externally Owned Accounts (EOAs) to execute smart contract code directly from their addresses
	- Which means EOAs can now have some smart account functionalities 

```bash
curl http://
```

Other eips included in this upgrade : 
1. EIP2537 BLS precompile.
2. EIP2935 Historical block hashes in state
3. EIP6110 Validator deposits onchain
4. EIP7002 Execution layer triggerable exits
5. EIP7251 Increase max effective balance
6. EIP7549 Committee index outside attestation 
7. EIP7685 General purpose execution layer requests
8. EIP7702 Set Account Code
9. EIP7840 Add blob schedule to EL config files
10. EIP7623 Increase Calldata cost
11. EIP7691 Blob throughput increase

EIP 7549, Move committee index outside attestation – In an effort to make CL client software more efficient, this code change introduces a refactoring of validator attestation messages. It is expected to reduce the networking load on validator nodes, albeit to a lesser degree than EIP 7251.
EIP 6110, Supply validator deposits on chain – This code change shifts the responsibility of validating new staked ETH deposits from the CL to the EL. In doing so, developers can increase the security of deposits, reduce protocol complexity in CL clients, and improve staking UX by decreasing the delay between when a deposit of 32 ETH is made on the EL and when a validator is newly activated on the CL.
EIP 2935, Serve historical block hashes from state – Introduces a change to the EL such that proofs of historical blocks can be generated from the state. It may offer some additional functionality for smart contract developers as they will be able to access information about Ethereum state from prior blocks. Mainly, it is a necessary code change in preparation for the Verkle transition.
EIP 7685, General purpose execution layer requests – Creates a general-purpose framework for storing smart contract triggered requests to the CL. Due to the increasing popularity of smart contract-based staking pools, there is a demand to enable smart contracts to directly trigger validator withdrawals (EIP 7002) and consolidations (EIP 7251) on the CL. This code change introduces a framework for the protocol to store these types of requests for easy processing by the CL.

These were initially planned but might be removed and included in the next upgrade (Fusaka) :
1. EIP 7549 PeerDAS 
2. EIP7742 decouple blob count
3. EIP7762 increase min blob fee and a blob increase (needs more analysis & concerns about stakers with low bandwidth)

source: https://eips.ethereum.org/EIPS/eip-7600

**What is EIP 7594 PeerDAS**

## What are the changes ?

### EIP7702 EOA account code for one transaction 
#### motivation
#### what is the exact thing changing here?
#### impact to community

### EIP-7002: Execution layer triggerable withdrawals
#### motivation
#### what is the exact thing changing here?
#### impact to community

### EIP-7251: Increase the MAX_EFFECTIVE_BALANCE
#### motivation
#### what is the exact thing changing here?
#### impact to community

EIP-6110: Supply validator deposits on chain    
Provides validator deposits as a list of deposit operations added to the Execution Layer block


Current Status: 
AT the last 
## What does it mean to Ethereum ?
Notably, there are no code changes in Pectra targeted at hardening the narrative of ETH as “sound money” or a store of value.

Fix critical shortcomings of the protocol as a proof-of-stake blockchain
Improve the user experience (UX) of interacting with smart contract applications on Ethereum
Increase Ethereum’s data availability capacity

## What does it means to Sygnum?

## What actions do we need to take as community?

## What actions we are taking at Sygnum? 

## What are the future upgrades? 


## Glossary:

[^1]: Verkle Transition is to move all the Ethereum state data structure from a Merkle Patricia Tree structure to a Verkle structure.  

## Sources 
https://pectra.wtf/#resources
https://x.com/sassal0x/status/1882774548409659850?s=46&t=9S0dViw5nKvPGcWku-THnw

