/*

TODO -
1. losing connection from head in incrementing from 1 to 2 in list !!!




*/

#include<bits/stdc++.h>
using namespace std;

class Node {
public:
    int value;
    Node *next, *previous;
    unordered_set<string> strings;

    Node() : value(0), next(nullptr), previous(nullptr) {}
    Node(int v) : value(v), next(nullptr), previous(nullptr) {}

    int currentValue() { return value; }
    void addString(string key) { strings.insert(key);  }
    void deleteString(string key) {
        auto it = strings.find(key);
        if(it!=strings.end()) {
            strings.erase(it);
        }
    }
    string getKey() { return *strings.begin(); }
    int getSize() { return strings.size(); }
};

class AllOne {
public:
    unordered_map<string, Node*> myMap;
    Node *head, *tail;

    AllOne() {
        head = NULL;
        tail = NULL;
    }

    void inc(string key) {
        if(head==NULL) {
            Node *n = new Node(1);
            n->addString(key);

            head = n;
            tail = n;

            myMap[key] = head;
        }
        else {
            if(myMap.find(key)==myMap.end()) {
                if(head->currentValue() == 1) {
                    head->addString(key);
                }
                else {
                    Node *n = new Node(1);
                    n->addString(key);

                    head->previous = n;
                    n->next = head;
                    head = n;
                }
                myMap[key] = head;
                return;
            }

            Node *n = myMap[key];
            if(n->next == NULL) {
                cout << "YES" << endl;
                int currentValue = n->currentValue();
                Node *newNode = new Node(currentValue + 1);
                newNode->addString(key);
                n->deleteString(key);

                if(n->getSize() == 0) {
                    if(head == n) {
                        head = newNode;
                        tail = newNode;
                    }
                    else {
                        Node *prev = n->previous;
                        prev->next = newNode;
                        newNode->previous = prev;
                    }
                }
                else {
                    n->next = newNode;
                    newNode->previous = n;
                }

                tail = newNode;
                myMap[key] = tail;
            }
            else {
                int currentValue = n->currentValue();
                Node *newNode = new Node(currentValue + 1);
                newNode->addString(key);
                n->deleteString(key);

                if(n->next->currentValue() == currentValue + 1){
                    Node *nextNode = n->next;
                    nextNode->addString(key);

                    if(n->getSize() == 0) {
                        if(head==n){
                            cout << "Head" << endl;
                            head = nextNode;
                            myMap[key] = head;
                            return;
                        }
                        Node *prev = n->previous;
                        prev->next = nextNode;
                        nextNode->previous = prev;    
                    }
                    cout << "NOT NULL" << endl;
                    myMap[key] = nextNode;
                }
                else {
                    if(n->getSize() == 0) {
                        if(head==n){
                            head = newNode;
                            myMap[key] = head;
                            return;
                        }
                        Node *prev = n->previous;
                        prev->next = newNode;
                        newNode->previous = prev;
                    }
                    else {
                        newNode->next = n->next;
                        Node *nextNode = n->next;
                        nextNode->previous = newNode;
                        n->next = newNode;
                        newNode->previous = n;
                    }
                    myMap[key] = newNode;
                }
            }
        }
    }

    void display() {
        Node *temp = head;
        while(temp!=NULL) {
            cout << temp->currentValue() << "->";
            temp = temp->next;
        }
        cout << endl;
    }

    void displayNodes(Node* value) {
        for(auto it:value->strings) {
            cout << it << " ";
        }
        cout << endl;
    }

    void displayMap() {
        for(auto it:myMap) {
            cout << it.first << " " << it.second->currentValue() << " ";
            displayNodes(it.second);
        }
        cout << endl;
    }

    string getMaxKey() {
        if(tail==NULL) {
            return "Tail is Null";
        }
        return tail->getKey();
    }

    string getMinKey() {
        if(head==NULL) {
            return "Head is Null";   
        }
        return head->getKey();
    }

    void fullNodes() {
        Node *temp = head;
        while(temp!=NULL) {
            displayNodes(temp);
            temp = temp->next;
        }
        cout << endl;
    }

};

int main() {
    AllOne obj;
    obj.inc("a");
    obj.inc("a");
    obj.inc("a");

    obj.display();

    obj.inc("b");

    obj.display();

    obj.inc("b");

    obj.display();
    obj.displayMap();

    // obj.inc("b");

    // obj.display();
    // obj.displayMap();

    // obj.inc("b");

    // obj.display();
    // obj.displayMap();

    // cout << obj.getMaxKey() << " " << obj.getMinKey() << endl;
}