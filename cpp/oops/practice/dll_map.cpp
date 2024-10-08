#include<bits/stdc++.h>
using namespace std;

class Node {
    unordered_set<string> strings;
    int value;
public:
    Node *next, *previous;
    Node() {}
    Node(int v) : value(v) {}
    int size() {
        return strings.size();
    }
    void insertString(string value) {
        strings.insert(value);
    }
    void deleteString(string value) {
        auto it = strings.find(value);
        if(it!=strings.end()) {
            strings.erase(it);
        }
    }
    string getKey() {
        return *strings.begin();
    }
    int getValue() {
        return value;
    }
};

class AllOne {
    unordered_map<string, Node *> myMap;
    Node *head, *tail;
public:
    AllOne() {
        head = NULL;
        tail = NULL;
    }
    void inc(string key) {
        if(myMap.find(key)!=myMap.end()) {
            Node *n = myMap[key];
            if(n->next == NULL) {
                Node *newNode = new Node(n->getValue() + 1);
                newNode->insertString(key);
                n->deleteString(key);
                newNode->previous = tail;
                tail->next = newNode;
                tail = newNode;
                myMap[key] = tail;
            }
            else {
                Node *nextNode = n->next;
                nextNode->insertString(key);
                n->deleteString(key);
                myMap[key] = nextNode;
            }
        }
        else {
            if(head==NULL) {
                head = new Node(1);
                tail = head;
                head->insertString(key);
            }
            else {
                head->insertString(key);
            }
            myMap[key] = head;
        }
    }

    void dec(string key) {
        Node *n = myMap[key];
        if(n->previous == NULL) {
            myMap.erase(key);
            head = NULL;
            tail = NULL;
        }
        else {
            n->deleteString(key);
            Node *previousNode = n->previous;
            previousNode->insertString(key);
            myMap[key] = previousNode;
        }
    }

    string getMaxKey() {
        if(head==NULL) {
            return "";
        }
        return head->getKey();
    }

    string getMinKey() {
        if(tail==NULL) {
            return "";
        }
        return tail->getKey();
    }
};

int main() {
    AllOne obj;
    obj.inc("hello");
    obj.inc("hello");
    cout<<obj.getMaxKey();
}