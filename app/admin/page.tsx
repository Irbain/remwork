"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Test from "./Testing";

export default function AdminDashboard() {
  return (
    <div className="flex justify-center items-center">
      <Button> Request </Button>
      <Button variant="secondary"> Clean </Button>
      <Button onClick={Test}>Fetch API</Button>
    </div>
  );
}
