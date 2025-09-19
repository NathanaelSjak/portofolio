import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CodePlayground = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const codeExamples = {
    javascript: {
      template: `// React Component Example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

console.log("Hello from React!");`,
      description: "React component with hooks",
    },
    python: {
      template: `# Machine Learning Example
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load data
data = pd.read_csv('data.csv')
X = data.drop('target', axis=1)
y = data['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
print(f"Accuracy: {model.score(X_test, y_test):.2f}")`,
      description: "Machine learning pipeline",
    },
    go: {
      template: `// Go API Example
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type User struct {
    ID   int    \`json:"id"\`
    Name string \`json:"name"\`
}

func main() {
    http.HandleFunc("/api/users", getUsers)
    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", nil)
}

func getUsers(w http.ResponseWriter, r *http.Request) {
    users := []User{
        {ID: 1, Name: "John"},
        {ID: 2, Name: "Jane"},
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(users)
}`,
      description: "REST API with Go",
    },
    kotlin: {
      template: `// Android Compose Example
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }

    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Count: $count",
            style = MaterialTheme.typography.h4
        )

        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = { count++ }) {
            Text("Increment")
        }
    }
}`,
      description: "Android Jetpack Compose UI",
    },
  };

  useEffect(() => {
    setCode(codeExamples[selectedLanguage].template);
  }, [selectedLanguage]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running code...");

    // Simulate code execution
    setTimeout(() => {
      const outputs = {
        javascript: "Hello from React!\nComponent rendered successfully!",
        python: "Accuracy: 0.85\nModel trained successfully!",
        go: "Server running on :8080\nAPI endpoint ready!",
        kotlin: "UI component created!\nCounter screen rendered!",
      };

      setOutput(outputs[selectedLanguage]);
      setIsRunning(false);
    }, 2000);
  };

  const languages = [
    { key: "javascript", name: "JavaScript", color: "#F7DF1E" },
    { key: "python", name: "Python", color: "#3776AB" },
    { key: "go", name: "Go", color: "#00ADD8" },
    { key: "kotlin", name: "Kotlin", color: "#7F52FF" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="code-playground"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2>Interactive Code Playground</h2>
      <p className="lead">
        Try out some of my code examples and see them in action
      </p>

      <div className="playground-container">
        <div className="language-tabs">
          {languages.map((lang) => (
            <button
              key={lang.key}
              className={`lang-tab ${
                selectedLanguage === lang.key ? "active" : ""
              }`}
              onClick={() => setSelectedLanguage(lang.key)}
              style={{
                backgroundColor:
                  selectedLanguage === lang.key ? lang.color : "transparent",
                color: selectedLanguage === lang.key ? "white" : "var(--text)",
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>

        <div className="code-editor">
          <div className="editor-header">
            <span className="file-name">
              {codeExamples[selectedLanguage].description}
            </span>
            <button
              className="run-button"
              onClick={runCode}
              disabled={isRunning}
            >
              {isRunning ? "Running..." : "▶ Run Code"}
            </button>
          </div>

          <textarea
            className="code-textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
        </div>

        <div className="output-panel">
          <div className="output-header">
            <span>Output</span>
          </div>
          <div className="output-content">
            <pre>{output || "Click 'Run Code' to see the output..."}</pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodePlayground;
