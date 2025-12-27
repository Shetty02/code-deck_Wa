import CodeMirror from '@uiw/react-codemirror'
import { BiImport, BiPlay, BiSave } from 'react-icons/bi'
import Select from 'react-select'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Theme
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { duotoneDark, duotoneLight } from '@uiw/codemirror-theme-duotone'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { bespin } from '@uiw/codemirror-theme-bespin'
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode'
import { okaidia } from '@uiw/codemirror-theme-okaidia'

import { indentUnit } from '@codemirror/language'
import { EditorState } from '@codemirror/state'

// Language
import { javascript } from '@codemirror/lang-javascript'

const CodeEditorContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--dark-bg);
`

const Toolbar = styled.div`
    height: 60px;
    background-color: var(--dark-layer);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    border-bottom: 1px solid #333;
`

const ToolGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
    color: ${props => props.primary ? 'white' : 'var(--text-light)'};
    border: ${props => props.primary ? 'none' : '1px solid var(--text-light)'};
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${props => props.primary ? 'var(--primary-hover)' : 'rgba(255,255,255,0.1)'};
        color: ${props => props.primary ? 'white' : 'white'};
        border-color: ${props => props.primary ? 'transparent' : 'white'};
    }
`

const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-light);
    cursor: pointer;
    font-size: 0.875rem;
    transition: color 0.2s;

    &:hover {
        color: var(--primary-color);
    }

    input {
        display: none;
    }
`

const selectStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: '#1e293b',
        border: '1px solid #333',
        color: 'white',
        minWidth: '150px'
    }),
    singleValue: (styles) => ({ ...styles, color: 'white' }),
    menu: (styles) => ({ ...styles, backgroundColor: '#1e293b' }),
    option: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: isFocused ? '#334155' : '#1e293b',
        color: 'white',
        cursor: 'pointer'
    })
};

function CodeEditor({
    currentLanguage,
    currentCode,
    setCurrentCode,
    getFile,
    saveCode,
    runCode,
    setCurrentLanguage
}) {
    const handleThemeChange = (selectedOptions) => {
        setCurrentTheme(selectedOptions);
    }
    const [currentTheme, setCurrentTheme] = useState({ value: 'githubDark', label: 'Github Dark' });
    const themeOptions = [
        { value: 'githubDark', label: 'Github Dark' },
        { value: 'githubLight', label: 'Github Light' },
        { value: 'duotoneDark', label: 'Duotone Dark' },
        { value: 'duotoneLight', label: 'Duotone Light' },
        { value: 'dracula', label: 'Dracula' },
        { value: 'bespin', label: 'Bespin' },
        { value: 'xcodeDark', label: 'Xcode Dark' },
        { value: 'xcodeLight', label: 'Xcode Light' },
        { value: 'okaidia ', label: 'Okaidia ' },
    ]
    const languageOptions = [
        { value: 'cpp', label: 'C++' },
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'javascript', label: 'JavaScript' },
    ];

    const [theme, setTheme] = useState(githubDark);
    const [language, setLanguage] = useState(javascript);
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions.find(l => l.value === currentLanguage) || languageOptions[3]);

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
        setCurrentLanguage(selectedOption.value);
    }

    useEffect(() => {
        if (currentLanguage === 'javascript') setLanguage(javascript);
        // Add other language mappings if/when imports are uncommented/available
        // For now, only javascript is imported in the imports section, 
        // but let's at least keep the state consistent.
        const option = languageOptions.find(o => o.value === currentLanguage);
        if (option) setSelectedLanguage(option);
    }, [currentLanguage])

    useEffect(() => {
        if (currentTheme.value === 'githubDark') setTheme(githubDark)
        if (currentTheme.value === 'githubLight') setTheme(githubLight)
        if (currentTheme.value === 'duotoneDark') setTheme(duotoneDark)
        if (currentTheme.value === 'duotoneLight') setTheme(duotoneLight)
        if (currentTheme.value === 'dracula') setTheme(dracula)
        if (currentTheme.value === 'bespin') setTheme(bespin)
        if (currentTheme.value === 'xcodeDark') setTheme(xcodeDark)
        if (currentTheme.value === 'xcodeLight') setTheme(xcodeLight)
        if (currentTheme.value === 'okaidia') setTheme(okaidia)
    }, [currentTheme.value])


    return (
        <CodeEditorContainer>
            <Toolbar>
                <ToolGroup>
                    <Select
                        options={languageOptions}
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        styles={selectStyles}
                    />
                    <Select
                        options={themeOptions}
                        value={currentTheme}
                        onChange={handleThemeChange}
                        styles={selectStyles}
                    />
                    <FileInputLabel htmlFor="codefile">
                        <BiImport size={18} />
                        <span>Import</span>
                        <input type="file" accept="." id='codefile' onChange={(e) => getFile(e, setCurrentCode)} />
                    </FileInputLabel>
                </ToolGroup>
                
                <ToolGroup>
                    <ActionButton onClick={saveCode}>
                        <BiSave size={18} />
                        Save
                    </ActionButton>
                    <ActionButton primary onClick={runCode}>
                        <BiPlay size={20} />
                        Run Code
                    </ActionButton>
                </ToolGroup>
            </Toolbar>
            <CodeMirror
                value={currentCode}
                height="100%"
                theme={theme}
                extensions={[
                    language,
                    indentUnit.of("        "),
                    EditorState.tabSize.of(8),
                    EditorState.changeFilter.of(() => true),
                ]}
                onChange={(value) => setCurrentCode(value)}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    highlightSpecialChars: true,
                    history: true,
                    foldGutter: true,
                    drawSelection: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                    syntaxHighlighting: true,
                    bracketMatching: true,
                    closeBrackets: true,
                    autocompletion: true,
                    rectangularSelection: true,
                    crosshairCursor: true,
                    highlightActiveLine: true,
                    highlightSelectionMatches: true,
                    closeBracketsKeymap: true,
                    defaultKeymap: true,
                    searchKeymap: true,
                    historyKeymap: true,
                    foldKeymap: true,
                    completionKeymap: true,
                    lintKeymap: true,
                }}
            />
        </CodeEditorContainer>
    );
}

export default CodeEditor
