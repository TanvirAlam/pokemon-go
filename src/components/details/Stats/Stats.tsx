import React from 'react'
import { Progress, Text } from "@chakra-ui/react";

import { StatContainer } from './Stats.module'

export const Stats = ({ stats }: any) => {
  return (
    <>
        {stats.map(({ base_stat, stat }: any, i: number) => (
            <div key={stat.name}>
                <span style={{ textTransform: "capitalize" }} key={i}>
                    {" "}
                    {stat.name}{" "}
                </span>
                <StatContainer>
                    <Text color="cyan.600">{base_stat}</Text>
                    <Progress
                        borderRadius="8px"
                        colorScheme="cyan"
                        max={256}
                        value={base_stat}
                    />
                </StatContainer>
            </div>
        ))}
    </>
  )
}
