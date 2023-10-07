// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.10;

contract FileUploader {

    struct File {
        string name;
        string ipfsHash;
    }

    mapping(address => File[]) public uploadedFiles;

    function uploadFile(string memory name, string memory ipfsHash) public {
        File memory file = File(name, ipfsHash);
        uploadedFiles[msg.sender].push(file);
    }

    function getUploadedFiles() public view returns (File[] memory) {
        return uploadedFiles[msg.sender];
    }
}
