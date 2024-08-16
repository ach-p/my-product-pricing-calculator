import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '通路A', 新加坡: 4000, 馬來西亞: 2400 },
  { name: '通路B', 新加坡: 3000, 馬來西亞: 1398 },
  { name: '通路C', 新加坡: 2000, 馬來西亞: 9800 },
];

const costData = [
  { item: '生產成本', TWD: 1000, SGD: 45, MYR: 150 },
  { item: '運輸成本', TWD: 200, SGD: 9, MYR: 30 },
  { item: '總成本', TWD: 1200, SGD: 54, MYR: 180 },
];

export default function PricingSystem() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">產品定價系統</h1>
      <Tabs defaultValue="cost">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="cost">成本分析</TabsTrigger>
          <TabsTrigger value="competitor">競爭對手分析</TabsTrigger>
          <TabsTrigger value="channel">通路策略</TabsTrigger>
          <TabsTrigger value="pricing">定價決策</TabsTrigger>
        </TabsList>
        <TabsContent value="cost">
          <Card>
            <CardHeader>
              <CardTitle>成本分析</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">項目</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">台幣(TWD)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新加坡元(SGD)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">馬來西亞令吉(MYR)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {costData.map((row) => (
                      <tr key={row.item}>
                        <td className="px-6 py-4 whitespace-nowrap">{row.item}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.TWD}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.SGD}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{row.MYR}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="competitor">
          <Card>
            <CardHeader>
              <CardTitle>競爭對手分析</CardTitle>
            </CardHeader>
            <CardContent>
              <p>此處可以添加競爭對手分析的詳細內容。</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="channel">
          <Card>
            <CardHeader>
              <CardTitle>通路策略</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="新加坡" fill="#8884d8" />
                  <Bar dataKey="馬來西亞" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pricing">
          <Card>
            <CardHeader>
              <CardTitle>最終定價決策</CardTitle>
            </CardHeader>
            <CardContent>
              <p>此處可以添加最終定價決策的摘要或詳細信息。</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}